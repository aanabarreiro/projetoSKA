import { ProductionStatus_e, ProductionStatusColors_e } from './enums/enum';

export class ProductionStatus{
    status: ProductionStatus_e;
    color: ProductionStatusColors_e;

constructor(status?: ProductionStatus_e, color?: ProductionStatusColors_e){
    this.status= status ?? ProductionStatus_e.WaitingProduction;
    this.color= color ?? ProductionStatusColors_e.WaitingProduction;
}
}