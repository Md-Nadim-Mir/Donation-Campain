import { Link } from "react-router-dom";

const Donation_item = ({ donate_info }) => {


    let { id, category_name, title, price, category_bg, card_bg, text_btn_bg, image } = donate_info || {};

    return (


        <div className="card w-full bg-base-100 shadow-2xl " style={{ backgroundColor: `${card_bg}` }}>

            <div className="grid md:flex justify-between items-center">

                <figure><img className="w-[320px]  rounded-xl" style={{ height: "300px" }} src={image} alt="Shoes" /></figure>

                <div className="card-body">



                    <div className="flex justify-left items-center">

                        <h2 className="card-title px-4 py-2 rounded-xl font-bold text-center " style={{ backgroundColor: `${category_bg}`, color: `${text_btn_bg}` }}>{category_name}</h2>

                    </div>

                    <p className="text-base  md:text-xl lg:text-base xl:text-xl  font-bold mt-6" style={{ color: `${text_btn_bg}` }}>{title}</p>

                    <h2 className="font-bold text-white text-xl pb-3">Price : ${price}</h2>

                    <Link to={`/donation_details/${id}`}>

                        <button className="btn text-white font-bold rounded-xl border-none" style={{ backgroundColor: `${text_btn_bg}` }}>Details</button>

                    </Link>


                </div>

            </div>

        </div>


    );
};

export default Donation_item;