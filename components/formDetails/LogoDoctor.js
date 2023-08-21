import Image from "next/image";
import logoWhite from "../../../public/form/medicopaciente.svg";

const LogoDoctor = () => (
  <>
    <div className="p-">
      <Image
        className=""
        src={logoWhite}
        width={300}
        height={300}
        alt="logo doctorfy"
      ></Image>
    </div>
  </>
);

export default LogoDoctor;
