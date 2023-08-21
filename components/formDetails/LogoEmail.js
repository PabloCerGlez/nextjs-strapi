import Image from "next/image";
import logoEmail from "../../../public/form/enviosolicitud.svg";

const LogoEmail = () => (
  <>
    <div className="p-">
      <Image
        className=""
        src={logoEmail}
        width={300}
        height={300}
        alt="logo doctorfy"
      ></Image>
    </div>
  </>
);

export default LogoEmail;