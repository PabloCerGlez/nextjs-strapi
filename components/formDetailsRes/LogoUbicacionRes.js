import Image from "next/image";
import logoInfoPersonal from "../../../public/form/ubicacion.svg";

const LogoUbicacionRes = () => (
  <>
   	<Image
						className="" 
						src={logoInfoPersonal}
      			width={160}
     				height={160}
      			alt="logo doctorfy"></Image>

  </>
);

export default LogoUbicacionRes;