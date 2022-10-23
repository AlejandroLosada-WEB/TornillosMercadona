export class Producto {
    _id:string
    name?:string
    price_prov?:number
    categoria?:string
    name_prov?:string
    format?:string
    revisado:boolean

    constructor(name?:string,price_prov?:number,categoria?:string,name_prov?:string,format?:string){
        this._id =""+Math.floor(Math.random() * 1000) + 1;    
        this.revisado = false;
        this.name=name;
        this.price_prov=price_prov;
        this.categoria=categoria;
        this.name_prov=name_prov;
        this.format=format;
    }
}