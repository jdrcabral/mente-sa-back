export interface IUserAuthentication {
    email: string;
    id: string;
}

export interface IUserWithoutPassword {
    id: string;
    name: string;
    email: string;
    cpf: string;
    birthDate: Date;
    professionalIdentification?: string;
    isActive: boolean;
    role: string;
    gender: number;
    createdAt: Date;
    updatedAt: Date;
}