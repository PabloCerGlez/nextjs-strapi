import Image from "next/image";
import Doctorfy from "../../../fullcomm/public/indexHome.jpg";
const Portada = () => (
  <>
     <div className="navbarindex relative">
		<div className=" md:flex md:justify-between block ">
		<div className=" md:w-1/2 md:pl-20 md:pt-16 navbarindex ">
			<p className="textindex items-center">Encuentra a Tu Médico De Confianza</p> 
		</div>
		<div className="md:w-1/2">
		<Image
						className="" 
						src={Doctorfy}
      			width={0}
     				height={0}
      			alt="logo doctorfy"></Image>
		</div>
		</div>
	</div>
	<div className="bg-green-200 absolute md:bottom-20 -bottom-36  left-12 w-5/6 md:left-1/4 md:h-16 h-44 md:w-3/6 divBuscar">
			<div className="grid justify-items-center p-2">
					
<form className="md:flex md:items-center">   
    <label htmlFor="voice-search" className="sr-only">Buscar</label>
    <div className="md:flex relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           
        </div>
				<div className="md:pr-1 flex pb-2 ">

        <input type="text" id="voice-search" className="bg-gray-50 border md:w-full w-96 h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Especialidad/enfermedad..." required />
				</div>
				<div className="md:pl-2 pb-2">
				<input type="text" id="voice-search" className="bg-gray-50 border md:w-full h-12 w-96 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ciudad" required />

				</div>

    </div>
		<div className="md:pb-2 ">
		<button type="submit" className=" w-96 h-12 md:w-full inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Buscar
    </button>
		</div>
    
</form>

			</div>
		</div>

		<div className="md:pt-24 pt-36">
			<p className="text-med">Médicos de <span className="text-med-blue">primer nivel</span> a tu dispocición</p>
			<p className="text-reserva-sin p-3 px-11">En Doctorfy, priorizamos la calidad y pasión por el cuidado al paciente - Reserva sin ningun costo</p>
		</div>

  </>
);

export default Portada;