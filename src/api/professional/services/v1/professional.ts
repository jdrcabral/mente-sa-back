import { Professional } from '../../models';
import { IProfessional } from '../../../../@types/user';
import { NotFoundError } from '../../../../utils/errors';

export class ProfessionalService {

    public static async create(professionalData: IProfessional): Promise<Professional> {      
        const professional = Professional.create({ ...professionalData, isActive: true });
        professional.hashUserPassword();
        await professional.save()
        
        return professional;
    }

    public static async list(): Promise<Professional[]> {
        const professionals: Professional[] = await Professional.find();

        return professionals.map((professional) => {
            const {password, ...professionalData} = professional;
            return professionalData
        }) as any[];
    }

    public static async findOneByEmail(email: string): Promise<Professional|null> {
        const professional: Professional|null = await Professional.findOneBy({ email });

        return professional;
    }

    public static async findById(id: string): Promise<Professional|null> {
        const professional: Professional|null = await Professional.findOneBy({ id });

        return professional;
    }

    public static async update(id: string, update_data: object) {

        const professional = await this.findById(id);
        
        if (!professional) {
            throw new NotFoundError('Professional not found!');
        }
        
        const updated = await Professional.update({ id }, update_data);
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
