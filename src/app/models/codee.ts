export class Codee {

    constructor(key: string, data: CodeeData) {
        this.key = key;
        this.naam = data.naam;
        this.van = data.van;
        this.selfoon = data.selfoon;
        this.epos = data.epos;
        this.ouderdom = data.ouderdom;
    }

    key: string;
    naam: string;
    van: string;
    selfoon: number;
    epos: string;
    ouderdom: number;

    toData(): CodeeData {
        return {
            naam: this.naam,
            van: this.van,
            selfoon: this.selfoon,
            epos: this.epos,
            ouderdom: this.ouderdom
        } as CodeeData;
    }
}

export class CodeeData {
    naam: string;
    van: string;
    selfoon: number;
    epos: string;
    ouderdom: number;
}