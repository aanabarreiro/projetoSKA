import {OrderColors_e} from './enums/enum';

export class ProductionOrder{
    key: string|null;
    label: string;
    value: string;
    description: string;
    icon: string;
    image: string;
    color: keyof typeof OrderColors_e;
    productImage: string;
    quantity: number;


constructor(){
    this.key= null;
    this.label= '';
    this.value= '';
    this.description= '';
    this.icon= '';
    this.image= '';
    this.color= '';
    this.productImage= '';
    this.quantity= 0; 

}}