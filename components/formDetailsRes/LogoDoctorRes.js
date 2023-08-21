import Image from "next/image";
import logoWhite from "../../../public/form/medicopaciente.svg";

const LogoDoctorRes = () => (
  <>
   	<Image
						className="" 
						src={logoWhite}
      			width={200}
     				height={200}
      			alt="logo doctorfy"></Image>

  </>
);

export default LogoDoctorRes;
