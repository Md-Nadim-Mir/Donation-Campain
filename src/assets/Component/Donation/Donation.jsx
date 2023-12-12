import { useEffect, useState } from "react";
import Donation_item from "./Donation_item";



const Donation = () => {

    let [choose, setChoose] = useState([]);
    let [found, notFound] = useState(false);
    let [seeAll,setSeeAll]=useState(false);

    // // show all function
    // let handleSeeAll=()=>{

    // }

    // console.log(seeAll)

    useEffect(() => {

        let loadChooseData = JSON.parse(localStorage.getItem('help'));

        if (loadChooseData) {

            setChoose(loadChooseData)

        }

        else {
            notFound('No donation is not added');
        }


    }, [])


    // let length=(choose.length);
    // // console.log(length)

    return (

        <div className="pb-10">

            

            {found ?
                <p className="h-[80vh] flex justify-center items-center text-xl  md:text-3xl font-bold">No donation is not added</p>
                :
                <div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-5">
                        {
                            seeAll ? 
                            choose.map(donate_info => <Donation_item key={donate_info.id} donate_info={donate_info}></Donation_item>)
                            :
                            choose.slice(0,4).map(donate_info => <Donation_item key={donate_info.id} donate_info={donate_info}></Donation_item>)
                        }


                    </div>


                    <div className="flex justify-center items-center mt-12">

                        {
                            choose.length> 4 && <button onClick={()=>setSeeAll(!seeAll)} className="text-base font-bold bg-[green] text-white rounded-xl px-6 leading-10">{seeAll ? '' : 'See All'}</button>
                        }

                    </div>

                </div>

            }
        </div>
    );
};

export default Donation;