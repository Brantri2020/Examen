export class City {
    _id?: number;
    nameProvince: string;
    nameCity: string;    


    constructor(nameCity: string,
        nameProvince: string) {
        this.nameCity = nameCity;
        this.nameProvince = nameProvince;
    }
}