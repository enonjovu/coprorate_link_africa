"use server"

import { ObjectId } from "mongodb";

// Directory Props
type directoryProps ={
  _id:string;
  name: string;
  phone: string;
  email: string;
  website: string;
  address: string;
  lat: number;
  lon: number;
  description:string;
  logo:{url: string;key: string;}[]
}[]

// Blog Props
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
    author:string,
    date:string,
    images:{
      url:string,
      key:string,
    }[],
    story:string,
    title:string,
    category:string,
    related:{
      _id:string,
      title:string,
      category:string,
      story:string,
      images:{
        url:string,
        key:string,
      }[],
    }[]
}[]

// Tender Props
type tenderProps = {
  _id:string,
  title:string,
  description:string,
  requirements:string[],
  company:string
}[]

type tender = {
    _id:string,title:string,description:string,
    company:{
      logo:{url: string;key: string;}[]
    }[]
}[]
const rootLink = process.env.ROOT_LINK



// Blog Actions
export const getItemsCount = async () : Promise<number> =>{
   const response = await fetch(`${rootLink}/api/blogs/count`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}
export const fetchLatestBlogs = async (page:string) : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/all?page=${page}`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}
export const fetchTopBlogs = async () : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/top`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}  
export const fetchBlogsByCategory = async (category:string) : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/category/?category=${category}`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}
export const fetchSingleBlogById = async (id:string) : Promise<singleBlogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/singleOnly/?id=${id}`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}
export const fetchBlogsById = async (id:string) : Promise<singleBlogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/single/?id=${id}`,{next:{revalidate:0}});
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
export const updateBlog = async (formData:{},id:string) : Promise<{status:string,message:string}> =>{
  const response = await fetch(`${rootLink}/api/blogs/update`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(formData),
  });
  if(!response.ok){throw new Error("Error Posting Data")}
  return await response.json();
}
export const deleteBlog = async (id:string) : Promise<{status:string,message:string}> =>{
  const response = await fetch(`${rootLink}/api/blogs/delete/?id=${id}`,{method:"DELETE"});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}
export const deleteImage = async (key:string,id:string) : Promise<{status:string}> =>{
  const response = await fetch(`${rootLink}/api/blogs/deleteImages/?key=${key}&id=${id}`,{method:"PATCH"});
  if(!response.ok){throw new Error("Error Deleting Images")}
  return await response.json();
}

// Tender Actions
export const postTender = async (formData:{}) : Promise<{status:string,message:string}> =>{
  const response = await fetch(`${rootLink}/api/tenders/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(formData),
  });
  if(!response.ok){throw new Error("Error Posting Data")}
  return await response.json();
}
export const fetchAllTenders = async () : Promise<tender> =>{
  const response = await fetch(`${rootLink}/api/tenders/all`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}
export const getTenderByID = async (id:string) : Promise<tenderProps> =>{
  const response = await fetch(`${rootLink}/api/tenders/single/?id=${id}`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}

// Company Actions
export const fetchCompanies = async () : Promise<directoryProps> =>{
  const response = await fetch(`${rootLink}/api/directory/all`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}
export const postCompany = async (formData:{}) : Promise<{status:string,message:string}> =>{
  const response = await fetch(`${rootLink}/api/directory/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(formData),
  });
  if(!response.ok){throw new Error("Error Posting Data")}
  return await response.json();
}
export const fetchCompanyById = async (id:string) : Promise<directoryProps> =>{
  const response = await fetch(`${rootLink}/api/directory/single/?id=${id}`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}


// Search Engiene
export const searchStories = async (searchQuery:string) : Promise<blogProps> =>{
  const response = await fetch(`${rootLink}/api/blogs/search?searchQuery=${searchQuery}`,{next:{revalidate:0}});
  if(!response.ok){throw new Error("Error Fetching Data")}
  return await response.json();
}