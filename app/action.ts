"use server"
type blogProps = {
    id:string,
    image:{
      url:string,
      key:string,
    },
    story:string,
    title:string,
    category:string
}[]

type singleBlogProps = {
    id:string,
    images:{
      url:string,
      key:string,
    }[],
    story:string,
    title:string,
    category:string
}[]
const rootLink = process.env.ROOT_LINK

export const fetchLatestBlogs = async () : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/all`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}

  
export const fetchBlogsByCategory = async (category:string) : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/category/?category=${category}`,{next:{revalidate:1}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}


export const fetchBlogsById = async (id:string) : Promise<singleBlogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/single/?id=${id}`,{next:{revalidate:1}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}


export const postBlog = async (formData:{}) : Promise<{status:string,message:string}> =>{
  const response = await fetch(`${rootLink}/api/blogs/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(formData),
  });
  if(!response.ok){throw new Error("Error Posting Data")}
  return await response.json();
}