import { Link } from "react-router-dom";


const Category = ({ data, handleInfo }) => {

    let { id, category_name, title, price, category_bg, card_bg, text_btn_bg, image } = data || {};

    return (

        <Link to={`/donation_details/${id}`}>

            <div onClick={() => handleInfo(data)}>

                <div className="card w-full bg-base-100 shadow-2xl" style={{ backgroundColor: `${card_bg}` }}>

                    <figure><img className="w-full" style={{ height: "200px" }} src={image} alt="Shoes" /></figure>

                    <div className="card-body">

                        <div className="flex justify-between items-center">

                            <h2 className="card-title p-2 rounded-xl font-bold" style={{ backgroundColor: `${category_bg}`, color: `${text_btn_bg}` }}>{category_name}</h2>

                            <h2 className="font-bold text-[#f56e26]  text-xl">Price : ${price}</h2>

                        </div>

                        <p className="text-base  md:text-xl lg:text-base xl:text-xl  font-bold mt-6" style={{ color: `${text_btn_bg}` }}>{title}</p>

                    </div>

                </div>


            </div>

        </Link>
    );
};

export default Category;