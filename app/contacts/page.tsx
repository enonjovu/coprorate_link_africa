'use client';
import { useEffect } from "react";
import ContactForm from "../components/ContactForm";


const Contacts = () => {
  useEffect(() => {import('preline')}, [])

  return ( 
      <>
        <ContactForm/>
      </>
  );
}
 
export default Contacts;