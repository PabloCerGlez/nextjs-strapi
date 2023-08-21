import Image from "next/image";
import logoEmail from "../../../public/form/enviosolicitud.svg";

const logoEmailRes = () => (
  <>
   	<Image
						className="" 
						src={logoEmail}
      			width={160}
     				height={160}
      			alt="logo doctorfy"></Image>

  </>
);

export default logoEmailRes;