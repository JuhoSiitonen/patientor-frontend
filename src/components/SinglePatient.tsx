import { useEffect, useState } from "react";
import patientService from "../services/patients";

import { Patient, Entry } from "../types";
import EntryDetails from "./EntryDetails";

interface Props {
    patient : string
  }

const SinglePatient = ({ patient }: Props) => {
    const [newPatient, setNewPatient] = useState<Patient>();

    useEffect(() => {
        const setPatientNow = async() => {
            const chosenPatient = await patientService.getOne(patient);
            console.log(patient);
            if (chosenPatient.length > 0) {
                setNewPatient(chosenPatient[0]);
            }
            console.log(newPatient);
        };
        void setPatientNow();
    }, [patient]);
    
    if ( newPatient == undefined) {
        return (<></>);
    }

    return (<div>
            <h2>{newPatient.name}</h2>
            <p>ssn:{newPatient.ssn}
            <br></br>
            Occupation: {newPatient.occupation}
            </p>
            <br></br>
            <h3>Entries</h3>
            {newPatient.entries.map(e => 
                <EntryDetails entry={e} key={e.id} /> )}
        </div>);
};

export default SinglePatient;