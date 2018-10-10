export class Codee {

    constructor(key: string, data: CodeeData) {
        this.key = key;
        this.naam = data.naam;
        this.van = data.van;
        this.selfoon = data.selfoon;
        this.epos = data.epos;
    }

    key: string;
    naam: string;
    van: string;
    selfoon: number;
    epos: string;

    toData(): CodeeData {
        return {
            naam: this.naam,
            van: this.van,
            selfoon: this.selfoon,
            epos: this.epos
        } as CodeeData;
    }
}

export class CodeeData {
    naam: string;
    van: string;
    selfoon: number;
    epos: string;
}