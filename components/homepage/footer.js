import Image from "next/image";
import logoWhite from "../../../fullcomm/public/Doctorfy.png";

const Footer = () => (
  <>
   	
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
						<Image
						className="" 
						src={logoWhite}
      			width={35}
     				height={35}
      			alt="logo doctorfy"></Image>
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Doctorfy</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Inicio</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Terminos y condiciones</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">p de p</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">Doctorfy™</a>. All Rights Reserved.</span>
    </div>
</footer>



  </>
);

export default Footer;