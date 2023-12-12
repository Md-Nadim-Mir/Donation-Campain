import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import { useState } from "react";


const Home = () => {

    // inf.json loaded completed
    let info=useLoaderData();

    // useState declare for show donation_details_route show
    let [store,setStrore]=useState([]);


    // declare function
    let handleInfo=(data)=>{

        setStrore(data);
        

    }

    // search value set 
    let [foundItem,setFoundItem]=useState([]);

    // search function

    
    let handleSearch=(searchItem)=>{

        let searchData=searchItem.toLowerCase();
        setFoundItem(searchData);

    }

    



    return (
        <div>
              
              <Banner handleSearch={handleSearch}></Banner>
              <Categories foundItem={foundItem} info={info} handleInfo={handleInfo}></Categories>
              
        </div>
    );
};

export default Home;