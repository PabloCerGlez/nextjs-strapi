import Image from "next/image";
import logoInfoPersonal from "../../../fullcomm/public/form/enviosolicitud.svg";

const Opcion = () => (
  <>
	<div className="md:flex md:space-x-4 md:pl-44 pl-24 ">
	<div className=" space w-80 h-80 p-12 bg-white rounded-lg border border-neutral-200 flex-col justify-center items-start gap-6 inline-flex">
  <div className="w-11 h-11 relative bg-cyan-500 bg-opacity-10 rounded-full">
    <div className="left-[16.62px] top-[7.39px] absolute text-cyan-500 text-2xl font-semibold leading-7">1</div>
  </div>
  <div className="flex-col justify-center items-start gap-3.5 flex">
    <div className="text-black text-lg font-semibold leading-7">Médicos Evaluados</div>
    <div className="w-64 text-zinc-600 text-sm font-normal leading-tight">Los médicos que conforman  la red Doctorfy son cuidadosamente aprobados tras cumplir nuestros estandares y evaluaciones.</div>
    <div className="justify-center items-center gap-1 inline-flex">
      <div className="text-cyan-500 text-base font-semibold capitalize leading-snug">Reservar Cita</div>
      <div className="w-3 h-3 relative origin-top-left -rotate-180" />
    </div>
  </div>
</div>
<div className=" space w-80 h-80 p-12 bg-white rounded-lg border border-neutral-200 flex-col justify-center items-start gap-6 inline-flex">
  <div className="w-11 h-11 relative bg-cyan-500 bg-opacity-10 rounded-full">
    <div className="left-[14.77px] top-[7.39px] absolute text-cyan-500 text-2xl font-semibold leading-7">2</div>
  </div>
  <div className="flex-col justify-center items-start gap-3.5 flex">
    <div className="text-black text-lg font-semibold leading-7">Comodidad Sin Costos</div>
    <div className="w-64 text-zinc-600 text-sm font-normal leading-tight">Nuestro servicio garantiza comodidad, facilidad y seguridad al reservar tu cita médica, completamente gratis.</div>
    <div className="justify-center items-center gap-1 inline-flex">
      <div className="text-cyan-500 text-base font-semibold capitalize leading-snug">Registrarme gratis</div>
      <div className="w-3 h-3 relative origin-top-left -rotate-180" />
    </div>
  </div>
</div>
<div className="space w-80 h-80 p-12 bg-white rounded-lg border border-neutral-200 flex-col justify-center items-start gap-6 inline-flex">
  <div className="w-11 h-11 relative bg-cyan-500 bg-opacity-10 rounded-full">
    <div className="left-[14.77px] top-[7.39px] absolute text-cyan-500 text-2xl font-semibold leading-7">3</div>
  </div>
  <div className="flex-col justify-center items-start gap-3.5 flex">
    <div className="text-black text-lg font-semibold leading-7">Todas Las Especialidades</div>
    <div className="w-64 text-zinc-600 text-sm font-normal leading-tight">Ya sea que estés buscando a un especialista en un area determinada o simplemente un médico de familia de confianza.</div>
    <div className="justify-center items-center gap-1 inline-flex">
      <div className="text-cyan-500 text-base font-semibold capitalize leading-snug">Buscar especialidades</div>
      <div className="w-3 h-3 relative origin-top-left -rotate-180" />
    </div>
  </div>
</div>

	</div>
   
  </>
);

export default Opcion;