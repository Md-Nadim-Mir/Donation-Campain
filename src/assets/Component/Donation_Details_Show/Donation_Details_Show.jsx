
import swal from 'sweetalert';

const Donation_Details_Show = ({ donation }) => {

    let { id, description, title, price, text_btn_bg, image } = donation || {};

    // handleDonation

    let handleDonation = () => {

        let addDonationData = [];

        let donationItems = JSON.parse(localStorage.getItem('help'));

        if (!donationItems) {

            addDonationData.push(donation);
            localStorage.setItem('help', JSON.stringify(addDonationData))
            swal("Welcome!", "Donation added successfully", "success");

        }

        else {

            let isExist = donationItems.find(item => item.id === id);

            if (!isExist) {

                addDonationData.push(...donationItems, donation);
                localStorage.setItem('help', JSON.stringify(addDonationData))
                swal("Welcome!", "Donation added successfully", "success");

            }


            else {

                swal("Opps!!!", "Donation already added in existing list", "error");
            }

        }



    }

    return (

        <div className="mx-5 md:mx-20 xl:mx-40">

            <div className="my-16 relative">
                <img className=" rounded-xl w-full" style={{ height: '500px' }} src={image} alt="" />


                <div className='absolute w-full left-0 bottom-0'>

                    <div className='bg-[#0000004e] py-7 '>

                        <button onClick={() => handleDonation()} className=" p-3 rounded-xl text-white font-bold -mt-[100px] ml-10" style={{ backgroundColor: `${text_btn_bg}` }}>Donate ${price}</button>

                    </div>




                </div>


            </div>

            <h1 className="text-xl font-extrabold my-3">{title}</h1>
            <h2 className="text-base pb-10 font-semibold">{description}</h2>

        </div>
    );
};

export default Donation_Details_Show;