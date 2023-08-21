import  Link from 'next/link';
import "../../styles/FormRegister.css"
function RegisterIndex()
{
	return (
		<div >
			<p className='text-lg font-bold title-form'>Registrarme Como:</p>
			<div className="flex items-center pt-1">
<Link className='flow-root' href="/register/registerPatient">
    <input  id="default-radio-2" type="radio" value="no" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
		
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 label-form-register">Paciente</label>
		</Link>
</div>
			<div className="flex items-center pt-1 pb-3">
			<Link className='flow-root' href="/register/registerDoctor">
    <input checked id="default-radio-1" type="radio" value="yes" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 label-form-register"/>
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Especialista</label>
		</Link>
</div>

		</div>
		
	)
}
export default RegisterIndex