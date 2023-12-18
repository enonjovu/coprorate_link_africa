"use server"
type blogProps = {
    id:string,
    image:string,
    story:string,
    title:string,
    category:string
}[]
const rootLink = process.env.ROOT_LINK

export const fetchLatestBlogs = async () : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/all`,{next:{revalidate:1}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}

  
export const fetchBlogsByCategory = async (category:string) : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/category/?category=${category}`,{next:{revalidate:1}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}


export const fetchBlogsById = async (id:string) : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/single/?id=${id}`,{next:{revalidate:1}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}