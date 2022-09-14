export interface IUserAuthentication {
    email: string;
    id: string;
}

export enum Gender {
    MALE,
    FEMALE,
    NON_BINARY,
    OTHER,
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

interface IBasePerson {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    birthDate: string;
    isActive: boolean;
    gender: Gender;
}

export interface IPatient extends IBasePerson {
};

export interface IProfessional extends IBasePerson {
    professionalIdentification?: string;
}