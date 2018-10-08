export class Codee {

    constructor(key: string, data: CodeeData) {
        this.key = key;
        this.name = data.name;
        this.surname = data.surname;
        this.phone = data.phone;
        this.email = data.email;
    }

    key: string;
    name: string;
    surname: string;
    phone: number;
    email: string;

    toData(): CodeeData {
        return {
            name: this.name,
            surname: this.surname,
            phone: this.phone,
            email: this.email
        } as CodeeData;
    }
}

export class CodeeData {
    name: string;
    surname: string;
    phone: number;
    email: string;
}