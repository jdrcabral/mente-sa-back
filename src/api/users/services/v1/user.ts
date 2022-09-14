import { ContactService, IContact } from './contact';
import { User, UserRole, Gender, Contact } from '../../models';

import { IUserWithoutPassword } from '../../../../@types/user';

export interface IUser {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    birthDate: string;
    professionalIdentification?: string;
    isActive: boolean;
    userRole: UserRole;
    gender: Gender;
    contacts: IContact[];
};

export class UserService {

    public static async create(userData: IUser): Promise<User> {
        const { contacts, ...userOnlyData } = userData;
       
        const user = User.create({ ...userOnlyData, isActive: true });
        user.role = UserRole.ADMIN;
        user.hashUserPassword();
        await user.save()
        const contactsList = await Promise.all(await ContactService.createList(contacts, user));

        user.contacts = contactsList;
        
        return user;
    }

    public static async list(): Promise<User[]> {
        const users: User[] = await User.find();

        return users.map((user) => {
            const {password, ...userData} = user;
            return userData
        }) as any[];
    }

    public static async findOneByEmail(email: string): Promise<User|null> {
        const user: User|null = await User.findOneBy({ email });

        return user;
    }

    public static async findById(id: string): Promise<User|null> {
        const user: User|null = await User.findOneBy({ id });

        return user;
    }
}
