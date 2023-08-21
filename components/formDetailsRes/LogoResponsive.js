import Image from "next/image";
import logoWhite from "../../public/form/DoctorfyWhite.png"

const LogoResponsive = () => (
	<>
			<Image
						className="h-20 w-48" 
						src={logoWhite}
      			width={150}
     				height={150}
      			alt="logo doctorfy"></Image>
	</>
)

export default LogoResponsive