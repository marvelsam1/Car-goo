const Hero = () => {
    return ( 
        <div className="flex md:flex-row flex-col items-center justify-between md:ml-24 ml-6 my-20">
            <div className="md:pr-0 pr-16 md:pl-0 pl-10 order-2 md:order-1">
                <h1 className="md:text-6xl text-4xl font-semibold md:w-[500px] md:text-left text-center">Find, book and rent a car <span className="text-blue">Easily</span></h1>
                <p className="md:w-[300px] text-sm text-gray py-6 md:text-left text-center">Get a car wherever and whenever you need it with your IOS and Android device.</p>
                <div className="flex md:flex-row flex-col items-center gap-2 justify-center md:justify-normal">
                    <img className="md:w-[150px] w-[100px]" src="assets/image 2.png" alt="" />
                    <img className="md:w-[150px] w-[100px]" src="assets/image 3.png" alt="" />
                </div>
            </div>

            <div className="  order-1 md:order-2">
                <img className="md:w-[600px]" src="assets/car 2 1.png" alt="" />
            </div>
        </div>
     );
}
 
export default Hero;