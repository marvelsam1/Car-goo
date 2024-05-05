import { Link } from "react-router-dom";

const Carscard = ( {items, handleBookNow, bookNow} ) => {
    return (  
        <div className="flex flex-col shadow-lg rounded-lg p-6 car-card">
            <img className="w-[300px] rounded-lg" src={items.image} alt="" />
            <div>
                <h1 className="text-2xl font-semibold py-3">{items.title}</h1>
                <p className="font-normal">{items.location}</p>
                <div className="flex items-center justify-between text-lightGray pb-4 pt-3">
                    <p>{items.condition}</p>
                    <p>{items.passengers} people</p>
                </div>
                <div className="flex items-center justify-between py-3 price-tag">
                    <p>Price:</p>
                    <p className="font-bold">${items.price}/day</p>
                </div>
                
                    <button className="text-white bg-blue py-3 px-7 rounded-lg w-[100%]" onClick={handleBookNow} onPointerEnter={bookNow}>Book now</button>
                
            </div>
        </div>
    );
}
 
export default Carscard;