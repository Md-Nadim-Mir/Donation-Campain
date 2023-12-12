import Category from "../Category/Category";


const Categories = ({info,handleInfo,foundItem}) => {


    return (
        <div>
                 
                  <h1 className="text-center text-[#220372] text-2xl md:text-4xl font-bold my-10">Donation Categories</h1>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-4 gap-y-8 mx-4 mb-20">
                        {
                        

                               info.filter((items)=>{
                                return foundItem ===''? items: items.category_name.toLowerCase().includes(foundItem)
                                }).map(data=><Category key={data.id} data={data}handleInfo={handleInfo}></Category>)

                           
                        }
              </div>


        </div>
    );
};

export default Categories;