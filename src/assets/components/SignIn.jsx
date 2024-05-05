import { NavLink } from "react-router-dom";

const SignIn = () => {
    return ( 
        <div className="flex justify-center">
        <div className="md:mx-40 shadow-lg md:mt-8 flex md:flex-row flex-col md:my-3 items-center">
            <div className="bg-blue text-white flex flex-col justify-start gap-4 md:py-36 py-3 md:px-16 px-10">
                <h1 className="md:text-5xl text-2xl md:w-[400px] font-semibold md:px-0 px-6 md:py-3 md:text-left text-center">Book car, Enjoy smooth ride</h1>
                <p className="text-[12px] md:w-[300px] md:text-left text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius molestias </p>
            </div>
            <div className="py-16 md:px-20 px-6">
                <form action="" className="flex flex-col justify-center">
                    <h1 className="text-white bg-blue py-3 px-6 text-center">Login with facebook</h1>
                    <p className="text-center py-10">or</p>
                    <input type="email" placeholder="Email" className="w-[300px] mb-4 pb-2 sign-up-email outline-none" />
                    <input type="text" placeholder="Password" className="w-[300px] mb-4 pb-2 sign-up-password outline-none" />
                    <button className="bg-blue text-white py-3 px-6">Sign In</button>
                </form>
                <h1 className="text-center pt-10 text-[12px]">Don't have an account yet? <NavLink to={'/Sign-Up'}><span className="text-blue cursor-pointer font-medium">Sign Up</span></NavLink></h1>
            </div>
        </div>
        </div>
     );
}
 
export default SignIn;