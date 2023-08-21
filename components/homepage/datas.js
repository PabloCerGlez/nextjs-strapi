import Image from "next/image";
import logoWhite from "../../../fullcomm/public/form/medicopaciente.svg";

const Datos = () => (
  <>
		<div className="md:flex pl-20">
			<div className="md:px-16 py-9">
				<p className="Number">4,000+</p>
				<p className="Description">Especialista</p>
			</div>
			<div className="md:px-16 py-9">
				<p className="Number">2,000+</p>
				<p className="Description">Reservas Al Mes</p>
			</div>
			<div className="md:px-16 py-9">
				<p className="Number">40+</p>
				<p className="Description">Especialidades</p>
			</div>
			<div className="md:px-16 py-9">
				<p className="Number">50,000+</p>
				<p className="Description">Visitas en Doctorfy.com</p>
			</div>
			<div className="md:px-16 py-9">
				<p className="Number">24/7</p>
				<p className="Description">Atención Al Cliente</p>
			</div>
		</div>

		<div className=" flex justify-center">
			<div className="h-80 w-5/6  flex justify-center rectangle">
				<div className="">

				<div className="Rectangle18 md:mt-20 md:mx-56  mt-20 mx-12">
					<p className="text-eres-esp p-4">¿Eres Especialista?</p>
				</div>
					<div>
						<p className="text-unir-com">¡Unete a la comunidad <span className="text-unir-com-blue">Doctorfy!</span></p>
					</div>
					<div>
						<p className="text-reserva-sin">Solicita tu evalución completamente gratis</p>
					</div>
				</div>
			</div>
		</div>
  </>
);

export default Datos;