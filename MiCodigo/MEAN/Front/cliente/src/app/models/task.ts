export class Task{
    _id?: number;
    name: string;
    endDate: string;
    province: string;
    city: string;
    responsible: string;
    status: string;

    constructor(name: string,
        endDate:string,
        province:string,
        city:string,
        responsible:string,
        status:string){
        this.name=name;
        this.endDate=endDate;
        this.province=province;
        this.city=city;
        this.responsible=responsible;
        this.status=status;
    }
}