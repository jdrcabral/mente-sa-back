import { User } from '../../../users/models';
import { Session, SessionStatus, SessionType } from '../../models';
import { NotFoundError } from '../../../../utils/errors';

export interface ISession {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    birthDate: string;
    professionalIdentification?: string;
    isActive: boolean;
    userRole: SessionStatus;
    gender: SessionType;
};

export class SessionService {

    public static async create(sessionData: ISession): Promise<Session> {
        const session = Session.create(sessionData);
        await session.save()

        return session;
    }

    public static async list(filter?: object): Promise<Session[]> {
        if (!filter) {
            return await Session.find();
        }

        const query = { isActive: true, ...filter};
        return await Session.findBy(query);
    }

    public static async listByPatient(patient: User): Promise<Session[]> {
        return this.list({ patient });
    }

    public static async listByProfessional(professional: User): Promise<Session[]> {
        return this.list({ professional });
    }

    public static async findById(id: string): Promise<Session|null> {
        const session: Session|null = await Session.findOneBy({ id });

        return session;
    }

    public static async update(id: string, update_data: object) {

        const professional = await this.findById(id);
        
        if (!professional) {
            throw new NotFoundError('Professional not found!');
        }
        
        const updated = await Session.update(id, update_data);

        await professional.reload()
        return professional;
    }


    public static async destroy(id: string) {
        const session = await this.findById(id);

        if (!session) {
            throw new NotFoundError('Professional not found!');
        }

        session.isActive = false;
        session.save();
    }
}
