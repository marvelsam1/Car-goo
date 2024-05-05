import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const WhyChooseUs = () => {
    return ( 
        <div id="whyChooseUs1">
            <div className="flex justify-center" id="whyChooseUs2">
                 <div className="text-blue py-3 px-5 font-semibold bg-lightBlue rounded-lg text-center">Why choose us</div>
            </div>
        <div>
            <div className="flex md:flex-row items-center gap-24 md:mr-24 flex-col">
                <div className="order-2 md:order-1">
                    <img src="assets/Audi 1.png" alt="" />
                </div>
                <div className="md:w-[500px] order-1 mx-6 md:order-2">
                    <h1 className="md:text-4xl font-semibold pb-8 pt-12 text-3xl md:text-left text-center">We offer the best experience with our rental deals</h1>
                    <div className="flex items-center gap-2">
                        <div className="bg-lightBlue p-4 rounded-full">
                             <FaFileInvoiceDollar className="text-blue"/>
                        </div>
                        <div>
                            <h1 className="font-medium">Best price guaranteed</h1>
                            <p className="text-[12px] md:w-[300px]">Find a lower price we will refund you of the difference 100%</p>
                        </div>
                    </div>
                    <div className="pt-6 flex items-center gap-2">
                        <div className="bg-lightBlue p-4 rounded-full">
                             <IoPersonSharp className="text-blue"/>
                        </div>
                        <div>
                            <h1 className="font-medium">Experienced driver</h1>
                            <p className="text-[12px] md:w-[300px]">Find a lower price we will refund you of the difference 100%</p>
                        </div>
                    </div>
                    <div className="pt-6 flex items-center gap-2">
                        <div className="bg-lightBlue p-4 rounded-full">
                            <MdOutlineAccessTimeFilled className="text-blue"/>
                        </div>
                        <div>
                            <h1 className="font-medium">24 hours car delivery</h1>
                            <p className="text-[12px] md:w-[300px]">Find a lower price we will refund you of the difference 100%</p>
                        </div>
                    </div>
                    <div className="pt-6 flex items-center gap-3">
                        <div className="bg-lightBlue p-4 rounded-full"> 
                            <IoIosChatbubbles className="text-blue"/>
                        </div>
                        <div>
                            <h1 className="font-medium">24/7 technical supprort</h1>
                            <p className="text-[12px] md:w-[300px]">Find a lower price we will refund you of the difference 100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default WhyChooseUs;