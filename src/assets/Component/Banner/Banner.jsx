
import { Form } from 'react-router-dom';
import './Banner.css'


const Banner = ({handleSearch}) => {

  


    let handleSubmit=(e)=>{

       e.preventDefault(); 
       return handleSearch(e.target.input.value);   

    }

    


    return (
        <div className="bg_img -mt-20" >

            <div className='pt-10 bg-opacity-80 bg-white h-[500px] flex justify-center items-center' >

                <div>

                    <h1 className="text-center text-black font-bold text-xl md:text-3xl mx-1">I Grow By Helping People In Need</h1>

                    <div  className="flex items-center justify-center pt-5">

                        <Form onSubmit={handleSubmit}>

                            <input className="p-3  rounded-xl" type="text" placeholder="search here..." name="input" id="" />

                            <input  type='submit' className="btn bg-[#FF444A] text-white"  value='search' />


                        </Form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;