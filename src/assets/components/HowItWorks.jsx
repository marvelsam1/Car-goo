import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa6";

const HowItWorks = () => {
    return ( 
        <div id="howitworks1">
            <div className="my-10 flex flex-col items-center justify-center" id="howitworks2">
            <h1 className="text-blue py-3 px-5 font-semibold bg-lightBlue rounded-lg ">How it works</h1>
            <p className="font-semibold text-3xl pt-5 md:text-left text-center">Rent by following 3 working steps</p>
            <div className="flex items-center md:flex-row flex-col justify-center gap-10 py-16">
                <div className="text-center flex flex-col items-center">
                    <div className="bg-lightBlue p-6 rounded-full">
                        <FaLocationDot className="text-blue text-4xl" />
                    </div>
                    <p className="text-1xl font-semibold py-2">Pick your location</p>
                    <p className="text-sm text-lightGray w-[200px]">Choose your location and find your best car</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div className="bg-lightBlue p-6 rounded-full text-4xl">
                         <FaCalendarAlt className="text-blue" />
                    </div>
                    <p className="text-1xl font-semibold py-2">Pick-up date</p>
                    <p className="text-sm text-lightGray w-[200px]">Select your pick up date and time to rent car</p>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div className="bg-lightBlue p-6 rounded-full text-4xl">
                         <FaCar className="text-blue"/>
                    </div>
                    <p className="text-1xl font-semibold py-2">Book your car</p>
                    <p className="text-sm text-lightGray w-[200px]">Book your car and we will deliver it directly to you</p>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default HowItWorks