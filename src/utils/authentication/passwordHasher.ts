import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, SALT_ROUNDS);
}

export const verifyPassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);
}