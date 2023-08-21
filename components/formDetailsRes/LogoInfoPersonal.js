import Image from "next/image";
import logoInfoPersonal from "../../../public/form/informacionperfil.svg";

const logoInfoPersonalRes = () => (
  <>
   	<Image
						className="" 
						src={logoInfoPersonal}
      			width={160}
     				height={160}
      			alt="logo doctorfy"></Image>

  </>
);

export default logoInfoPersonalRes;