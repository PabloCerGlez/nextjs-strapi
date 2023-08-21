import Image from 'next/image';
import womanPhone from '../../../fullcomm/public/prueba.jpg';

const Steps = () => (
  <>
    <div className="divstep md:flex md:justify-between md:flex-row-reverse block mt-20">
      <div className="md:w-1/2 ">
				<div className='p-16'>
				<div className="flex p-4">
					<div className='pr-4'>

          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
						>
            <path
              d="M34.9392 17.4662C34.9392 21.3205 33.6878 24.8809 31.5797 27.7696L42.2126 38.4088C43.2625 39.4585 43.2625 41.1631 42.2126 42.2128C41.1628 43.2624 39.4578 43.2624 38.4079 42.2128L27.775 31.5735C24.8858 33.6896 21.3247 34.9324 17.4696 34.9324C7.81933 34.9324 0 27.1146 0 17.4662C0 7.8178 7.81933 0 17.4696 0C27.1199 0 34.9392 7.8178 34.9392 17.4662ZM17.4696 29.5582C24.1467 29.5582 29.5639 24.142 29.5639 17.4662C29.5639 10.7904 24.1467 5.37421 17.4696 5.37421C10.7925 5.37421 5.37526 10.7904 5.37526 17.4662C5.37526 24.142 10.7925 29.5582 17.4696 29.5582Z"
              fill="white"
              fillopacity="0.7"
							/>
          </svg>
							</div>
					<div className='block'>
					<div>
          <p className="text-step-option">Encuentra a tu médico ideal</p>

						</div>
						<div>
						<p className="text-step-description">
            Descubre a tu médico ideal con la ayuda de miles de reseñas.
          </p>
						</div>
					</div>
						
         
        </div>
        <div className='flex p-4'>
				<div className='pr-4'>
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clippath="url(#clip0_217_10951)">
              <path
                d="M9.64286 2.8125V5.625H4.82143C2.1596 5.625 0 7.51465 0 9.84375V14.0625H45V9.84375C45 7.51465 42.8404 5.625 40.1786 5.625H35.3571V2.8125C35.3571 1.25684 33.9208 0 32.1429 0C30.365 0 28.9286 1.25684 28.9286 2.8125V5.625H16.0714V2.8125C16.0714 1.25684 14.635 0 12.8571 0C11.0792 0 9.64286 1.25684 9.64286 2.8125ZM45 16.875H0V40.7812C0 43.1104 2.1596 45 4.82143 45H40.1786C42.8404 45 45 43.1104 45 40.7812V16.875Z"
                fill="white"
                fillopacity="0.7"
              />
            </g>
            <defs>
              <clipPath id="clip0_217_10951">
                <rect width="45" height="45" fill="white" />
              </clipPath>
            </defs>
          </svg>
					</div>
					<div>
						<div>
          <p className="text-step-option">Agenda el dia que quieras</p>

						</div>
						<div>
						<p className="text-step-description">
            Agenda tu cita a la hora de tu conveniencia, sin tener que llamar.
            Fácil, rápido y seguro.
          </p>
						</div>
					</div>
				</div>
				<div className='flex p-4'>
				<div className='pr-4'>
          <svg
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.2886 0.54374C32.8937 -0.470172 31.0315 -0.0251166 30.1282 1.53751L13.2713 30.6648L5.0506 22.1439C3.83008 20.8793 1.92782 20.9624 0.799657 22.3305C-0.32832 23.6973 -0.254133 25.8322 0.966203 27.0956L11.7602 38.283C11.7602 38.283 12.0701 38.582 12.2134 38.6865C12.7188 39.0552 13.2865 39.2306 13.8479 39.2306C14.8326 39.2306 15.7983 38.6888 16.375 37.6927L35.1751 5.20769C36.0796 3.64528 35.6825 1.5566 34.2886 0.54374Z"
              fill="white"
              fillopacity="0.7"
            />
          </svg>
					</div>
					<div>
						<div>
						<p className="text-step-option">¡Listo!</p>
						</div>
						<div>
						<p className="text-step-description">
            Asi de fácil y seguro es encontrar a tu médico ideal y agendar tu
            cita. ¡Y es completamente GRATIS!
          </p>
						</div>
					</div>
          
         
        </div>
          
        </div>
       
      </div>
      <div className="md:w-1/2">
        <Image
          className=""
          src={womanPhone}
          width={0}
          height={0}
          alt="logo doctorfy"
        ></Image>
      </div>
    </div>
		<div className="md:pt-16 pt-36">
			<p className="text-med">Opiniones mas recientes de <span className="text-med-blue">pacientes</span> a tu dispocición</p>
			<p className="text-reserva-sin p-3 px-11">Miles de pacientes, enfrentando diversas situaciones de salud, recurren a Doctorfy</p>
		</div>
  </>
);

export default Steps;
