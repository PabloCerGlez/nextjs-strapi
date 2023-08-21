import Image from "next/image";
import logoUbicacion from "../../../public/form/ubicacion.svg";

const LogoUbicacion = () => (
  <>
    <div className="p-">
      <Image
        className="p-4"
        src={logoUbicacion}
        width={220}
        height={220}
        alt="logo doctorfy"
      ></Image>
    </div>
  </>
);

export default LogoUbicacion;