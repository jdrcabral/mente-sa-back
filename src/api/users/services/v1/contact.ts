import { Contact, ContactType, User } from '../../models';

export interface IContact {
    id?: string;
    type: ContactType;
    contact: string;
}

export class ContactService {

    public static async createList(contacts: IContact[], user: User): Promise<Contact[]> {
        const contactsList: Contact[] = [];
        
        contacts.forEach(async (contact) => {
            const newContact = Contact.create({ ...contact, user });
            newContact.save();
            contactsList.push(newContact);
        });

        return contactsList;
    }

    public static list() {

    }
}
