"use client"
import { useEffect } from "react";
import Faqs from "../components/Faqs";

const FaqsPage = () => {
    useEffect(()=>{
        import('preline')
    },[])
    return ( <Faqs/> );
}
 
export default FaqsPage;