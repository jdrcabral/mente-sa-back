import { User } from '../../../users/models';
import { Session, SessionStatus, SessionType } from '../../models';

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
        // const { contacts, ...userOnlyData } = sessionData;
       
        const session = Session.create(sessionData);
        await session.save()
        // const contactsList = await Promise.all(await ContactService.createList(contacts, user));

        // user.contacts = contactsList;
        return session;
    }

    public static async list(filter?: object): Promise<Session[]> {
        if (!filter) {
            return await Session.find();
        }

        return await Session.find(filter);
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
}
