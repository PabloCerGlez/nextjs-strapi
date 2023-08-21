import Image from "next/image";
import logoCorreo from "../../../public/form/enviosolicitud.svg";

const LogoCorreo = () => (
  <>
    <div className="p-3">
      <Image
        className=""
        src={logoCorreo}
        width={220}
        height={220}
        alt="logo doctorfy"
      ></Image>
    </div>
  </>
);

export default LogoCorreo;