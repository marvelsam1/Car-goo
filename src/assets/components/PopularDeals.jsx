import { popularCars } from "./PopularData";
import Carscard from "./Carscard";

const PopularDeals = ( {bookNow} ) => {
    return ( 
        <div>
            <div className="flex justify-center my-10">
                 <h1 className="text-blue py-3 px-5 font-semibold bg-lightBlue rounded-lg ">Popular Deals</h1>
            </div>
            <h1 className="md:text-4xl font-semibold text-center">Most popular car deals</h1>
            <div className="flex items-center gap-10 md:mx-24 mx-6 my-10 flex-wrap">
                {popularCars.map(items => <Carscard items={items} key={items.id} bookNow={bookNow}/>)}
            </div>
            <div className="flex justify-center my-10">
                <button className="seeAll rounded-lg py-2 px-5">See all</button>
            </div>
        </div>
     );
}
 
export default PopularDeals;