import { useState } from "react";
import Carscard from "./Carscard";
import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { cars } from "./Carsdata";

const Searchresults = () => {

    const[location, setLocation] = useState("")
    const[pickup, setPickup] = useState("")
    const[returnDate, setReturnDate] = useState("")
    const[searchResult, setSearchResult] = useState([])

    function handleSearch(e) {
        e.preventDefault()
        console.log(location)
        console.log(pickup)
        console.log(returnDate)
        setPickup("")
        setReturnDate("")
        const filtered = cars.filter(item => location === item.location)
        console.log(filtered)
        setSearchResult(filtered)
    }

    function handleBookNow() {
        alert('Are you sure you want to book this car?')
    }


    return ( 
        <div>
            <div className="my-20 flex justify-center">
                <form action="" className="flex gap-10 md:items-center bg-white rounded-lg shadow-lg md:w-[800px] py-4 px-10 justify-between md:flex-row flex-col items-start">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                             <CiLocationOn />
                             <label htmlFor="location" className="text-gray pl-1">Location</label>
                        </div>
                        <select name="location" id="location" className="border-none" value={location} onChange={e => setLocation(e.target.value)}>
                            <option value="Lagos" className=" text-blue border-none">Lagos</option>
                            <option value="Ibadan">Ibadan</option>
                            <option value="Abuja">Abuja</option>
                            <option value="PortHarcourt">PortHarcourt</option>
                        </select>
                    </div>

                    <div className="flex flex-col input pl-4">
                        <div className="flex items-center gap-2">
                            <FaRegCalendarAlt />
                            <label htmlFor="pickup"> Pick up date</label>
                        </div>
                        <input type="text"
                        className="border-none outline-none text-sm text-gray"
                        placeholder="Monday May 12/ 01:00"
                        name="pickup"
                        id="pickup"
                        value={pickup}
                        onChange={e => setPickup(e.target.value)} />
                    </div>

                    <div className="flex flex-col input pl-4">
                        <div className="flex items-center gap-2">
                            <FaRegCalendarAlt />
                            <label htmlFor="pickup"> Return date</label>
                        </div>
                        <input type="text"
                        placeholder="Friday Aug 12/ 12:00"
                        name="return"
                        id="return"
                        value={returnDate}
                        onChange={e => setReturnDate(e.target.value)} />
                    </div>

                    <button className="text-white bg-blue py-3 px-7 rounded-lg md:w-[110px] w-[100%]" onClick={handleSearch}>Search</button>
                </form>
            </div>
            {/* search-results */}
            <div className="flex items-center gap-10 md:mx-24 mx-6 my-10 flex-wrap">
             {searchResult.map(items => <Carscard items={items} key={items.id} handleBookNow={handleBookNow}/>)}
            </div>
        </div>
     );
}
 
export default Searchresults;