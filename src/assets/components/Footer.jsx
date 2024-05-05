import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return ( 
        <div className="py-16 bg-deepBlue text-white  px-24 flex md:flex-row flex-col md:items-start items-center md:justify-between justify-center md:text-left text-center">
            <div>
                <h1 className="font-semibold text-2xl py-4">CarGoo</h1>
                <p className="py-2 md:text-sm text-[12px]">001224211 Ajerth str, California, USA</p>
                <p className="pb-2 md:text-sm text-[12px]">0802312334</p>
                <p className="pb-3 md:text-sm text-[12px]">cargoo@gmail.com</p>
            </div>
            <div>
                <h1 className="font-semibold text-2xl py-4">Our Products</h1>
                <p className="py-2 md:text-sm text-[12px]">Career</p>
                <p className="pb-2 md:text-sm text-[12px]">Cars</p>
                <p className="pb-3 md:text-sm text-[12px]">Packages</p>
            </div>
            <div>
                <h1 className="font-semibold text-2xl py-4">Follow Us</h1>
                <div className="flex items-center justify-center md:justify-normal gap-2">
                    <FaInstagram />
                    <FiTwitter />
                    <AiOutlineYoutube />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;