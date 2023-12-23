import CompanyCard from "../../components/CompanyCard";

const SingleTender = ()=> {
    return ( 
        <main id="content">
            <div className="py-10 bg-white">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 space-y-10">
                    <CompanyCard/>

                    <div className="flex flex-col max-w-full w-full h-full">
                        <h2 className="text-3xl font-bold text-black">Job Description</h2>
                        
                        <div className="w-full md:w-11/12 flex flex-col items-center rounded-2xl p-4 shadow-lg space-y-6">
                            <h3 className="text-xl font-bold text-black">
                                Postition:  Senior Legal Counsel (Africa)
                            </h3>
                            {/* About The Role */}
                            <div className="w-full flex-col space-y-4">
                                <p className="font-bold text-black text-lg">ABOUT THE ROLE</p>
                                <p className="text-black w-full md:w-10/12">
                                    We invite you to rock with us in our band.

                                    The role offers the perfect opportunity for professional and personal development in a dynamic, fast-paced environment. As a rock band, teamwork and collaboration are at the center of what we do. But in order to be in a band, you also have to have your own unique groove.

                                    Your Mission: You’ll be in charge of creating innovative solutions for commercial transactions, compliance programs, and staff training. 

                                    Your Goals/Activities
                                </p>
                            </div>

                            {/* Expirience Requirements */}
                            <div className="w-full flex-col space-y-4">
                                <p className="font-bold text-black text-lg">Expirience Requirements</p>
                                <ul className="pl-4">
                                    <li className="text-black list-disc list-item">5 to 7 years experience working for a boutique law firm or startup</li>
                                    <li className="text-black list-disc list-item">Relevant experience in Corporate Law, Employment Law, Data Protection Law, or Intellectual Property Law</li>
                                    <li className="text-black list-disc list-item">Project Management experience in executing projects from start to finish and on time.</li>
                                    <li className="text-black list-disc list-item">G-Suite: proficient in G-Suite tools such as Google Sheets, Slides, and Docs </li>
                                    <li className="text-black list-disc list-item">Robocop Mindset: You are curious about the intersection of law and technology</li>
                                </ul>
                            </div>

                            {/* Accademic Requirements */}
                            <div className="w-full flex-col space-y-4">
                                <p className="font-bold text-black text-lg">Accedemic Requierements</p>
                                <ul className="pl-4">
                                    <li className="text-black list-disc list-item">5 to 7 years experience working for a boutique law firm or startup</li>
                                    <li className="text-black list-disc list-item">Relevant experience in Corporate Law, Employment Law, Data Protection Law, or Intellectual Property Law</li>
                                    <li className="text-black list-disc list-item">Project Management experience in executing projects from start to finish and on time.</li>
                                    <li className="text-black list-disc list-item">G-Suite: proficient in G-Suite tools such as Google Sheets, Slides, and Docs </li>
                                    <li className="text-black list-disc list-item">Robocop Mindset: You are curious about the intersection of law and technology</li>
                                </ul>
                            </div>

                            <button className="bg-red-700 text-white font-bold text-center w-11/12 md:w-1/3 h-16 rounded-lg">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default SingleTender;