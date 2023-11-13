import { Entry } from "../types";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';

interface Props {
    entry : Entry
  }

const EntryDetails = ({ entry }: Props) => {

    const assertNever = (value: never): never => {
        throw new Error(
          `Unhandled discriminated union member: ${JSON.stringify(value)}`
        );
      };
    
    switch (entry.type) {
        case 'Hospital':
            return (
                <div>
                  <LocalHospitalIcon/>
                  {entry.date} 
                  {entry.description}
                  <br></br>
                  Diagnosed by : {entry.specialist}
                </div>
            );
        case 'OccupationalHealthcare':
            return (
                <div>
                    <MedicalServicesIcon/>
                    {entry.date}
                    {entry.description}
                    <br></br>
                    Diagnosed by : {entry.specialist}
                </div>
            );
        case 'HealthCheck':
            return (
                <div>
                    <VaccinesIcon/>
                    {entry.date}
                    {entry.description}
                    <br></br>
                    Diagnosed by : {entry.specialist}
                </div>
            );
        default:
            return assertNever(entry);
            break;
    }

};

export default EntryDetails;