import Image from "next/image";
import logoInfoPersonal from "../../../public/form/enviosolicitud.svg";

const LogoCorreoRes = () => (
  <>
   	<Image
						className="" 
						src={logoInfoPersonal}
      			width={200}
     				height={200}
      			alt="logo doctorfy"></Image>

  </>
);

export default LogoCorreoRes;