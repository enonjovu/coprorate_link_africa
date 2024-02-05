import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  try {
    const { searchParams } = new URL(req.url);
    const pageNo = searchParams.get("page");
    const page = pageNo ? parseInt(pageNo) : 1;
    const mongoClient = await clientPromise;
    // Databse Name
    const db = mongoClient.db("coporate");

    // Table
    const collection = db.collection("tenders");
    const companyCollection = db.collection("directories");

    // Fetch the data
    const results = await collection
      .find({})
      .sort({ date: -1 })
      .skip(12 * (page - 1))
      .limit(12)
      .toArray();
    const itemsCount = await collection.countDocuments({});

    const getCompanyDetails = async (id: string) => {
      const company = await companyCollection
        .find({ _id: new ObjectId(id) })
        .project({
          lon: 0,
          lat: 0,
          website: 0,
          phone: 0,
          address: 0,
          description: 0,
          email: 0,
        })
        .toArray();
      return company[0];
    };

    const tenders: any = [];

    if (results) {
      for (const r of results) {
        tenders.push({
          _id: r._id,
          title: r.title,
          description: r.description,
          company: await getCompanyDetails(r.company),
        });
      }
    }
    const data = {
      tenders: tenders,
      itemsCount: itemsCount,
    };
    // Return the result
    return NextResponse.json(data);
  } catch (e) {
    console.log("Failed to fetch Data => ", e);
    return NextResponse.json({ error: "Failed to fetch data" + e });
  }
}
