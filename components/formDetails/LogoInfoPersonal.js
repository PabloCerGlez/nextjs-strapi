import Image from "next/image";
import logoInfoPersonal from "../../../public/form/informacionperfil.svg"

const LogoInfoPersonal = () => (
  <>
    <div className="p-">
      <Image
        className=""
        src={logoInfoPersonal}
        width={300}
        height={300}
        alt="logo doctorfy"
      ></Image>
    </div>
  </>
);

export default LogoInfoPersonal;