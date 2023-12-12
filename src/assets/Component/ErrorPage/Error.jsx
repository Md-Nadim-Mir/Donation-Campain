import { NavLink } from "react-router-dom";


const Error = () => {

    return (

        <div className="text-center font-bold text-base md:text-2xl pt-20 md:pt-28">

               <h1>Opps the page is not available.</h1>
               <NavLink to="/"><button className="btn btn-primary text-base font-bold text-white my-5">Go to Home</button></NavLink>


        </div>
    );
};

export default Error;