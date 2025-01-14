import { toast } from "react-toastify";
import { usePatiensStore } from "../store";
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProp = {
    patient: Patient;
}
export default function PatientDetails( { patient }: PatientDetailsProp) {

    const removePatient = usePatiensStore((state) => state.removePatient);

    const getPatientById = usePatiensStore((state) => state.getPatientById);

    const handleClick = () => {
      removePatient(patient.id);
      toast('Paciente Eliminado', { type: 'error'})
    }
 
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem label="ID" data={ patient.id } />
        <PatientDetailItem label="Name" data={ patient.name } />
        <PatientDetailItem label="Propietario" data={ patient.caretaker } />
        <PatientDetailItem label="Email" data={ patient.email } />
        <PatientDetailItem label="Fecha Registro" data={ patient.date.toString() } />
        <PatientDetailItem label="Síntomas" data={ patient.symptoms } />

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientById(patient.id)}>Editar</button>

            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" 
            onClick={handleClick}>Eliminar</button>
        </div>
    </div>
  )
}