import Image from "next/image";
import logoWhite from "../../public/form/DoctorfyWhite.png"

const LogoContainer = () => (
	<>
			<Image
						className="h-12 w-32" 
						src={logoWhite}
      			width={75}
     				height={75}
      			alt="logo doctorfy"></Image>
	</>
)

export default LogoContainer