import { Patient } from '../../models';
import { IPatient } from '../../../../@types/user';
import { NotFoundError } from '../../../../utils/errors';

export class PatientService {

    public static async create(patientData: IPatient): Promise<Patient> {      
        const patient = Patient.create({ ...patientData, isActive: true });
        patient.hashUserPassword();
        await patient.save()
        
        return patient;
    }

    public static async list(): Promise<Patient[]> {
        const patients: Patient[] = await Patient.find();

        return patients.map((patient) => {
            const {password, ...patientData} = patient;
            return patientData
        }) as any[];
    }

    public static async findOneByEmail(email: string): Promise<Patient|null> {
        const patient: Patient|null = await Patient.findOneBy({ email });

        return patient;
    }

    public static async findById(id: string): Promise<Patient|null> {
        const patient: Patient|null = await Patient.findOneBy({ id });

        return patient;
    }

    public static async update(id: string, update_data: object) {

        const professional = await this.findById(id);
        
        if (!professional) {
            throw new NotFoundError('Patient not found!');
        }
        
        const updated = await Patient.update({ id }, update_data);
        return updated;
    }

    public static async destroy(id: string) {
        const professional = await this.findById(id);

        if (!professional) {
            throw new NotFoundError('Professional not found!');
        }

        professional.isActive = false;
        professional.save();
    }
}
