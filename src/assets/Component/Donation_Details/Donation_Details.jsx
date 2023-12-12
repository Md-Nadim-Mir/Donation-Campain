import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donation_Details_Show from "../Donation_Details_Show/Donation_Details_Show";


const Donation_Details = () => {


    // dynamycally params get id
    let {id}=useParams();
    // console.log(id)

    // load data 
    let info=useLoaderData();
    

    // useState
    let [donation,setDonation]=useState({});


    // useEffect use 

    useEffect( ()=>{

        let details=info.find(data=>(data.id == id));
        setDonation(details);

    },[info,id])
     
   

    
    return (
        <div>
               <Donation_Details_Show donation={donation}></Donation_Details_Show>
        </div>
    );
};

export default Donation_Details;