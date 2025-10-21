import { Component, inject } from '@angular/core';
import {ProductionControl} from '../production-control/production-control';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {DialogSelect} from '../dialog-select/dialog-select';

import productionOrders from '../../assets/files/production-orders.json';
import stopTypes from '../../assets/files/stop-types.json';

import { ProductionOrder } from '../../../../common/ProductionOrder';
import { OrderColors_e, ProductionStatus_e, ProductionStatusColors_e} from '../../../../common/enums/enum';
import{ ProductionStatus } from '../../../../common/ProductionStatus';
import { P } from '@angular/cdk/keycodes';

@Component({  //indica que esse componente é um componente angular
  selector: 'app-terminal', //nome do componente
  imports: [ProductionControl], //outros componentes que esse componente usa
  templateUrl: './terminal.html',//caminho do arquivo html do componente
  styleUrl: './terminal.scss' //caminho do arquivo css do componente
})
export class Terminal {

  readonly dialog: MatDialog = inject(MatDialog);

    productionOrders: ProductionOrder[] = productionOrders as ProductionOrder[];
    stopTypes: any = stopTypes;

    productionOrder: ProductionOrder = new ProductionOrder;

    productionStatus: ProductionStatus = new ProductionStatus;

    OrderColors_e: typeof OrderColors_e = OrderColors_e;
    ProductionStatus_e: typeof ProductionStatus_e = ProductionStatus_e;

  async setProductionOrder(): Promise<void> {
    const dialogData: Object={
    dialogTitle: 'Selecione a Ordem de Produção',
    optionsList: this.productionOrders
    }

    const newProductionOrder: ProductionOrder = await this.openSelectDialog(dialogData);
    if (!newProductionOrder) return;

    this.productionOrder= newProductionOrder;
    this.productionStatus= new ProductionStatus(ProductionStatus_e.InProduction, ProductionStatusColors_e.InProduction);
  }

   async setStopType(){
    const dialogData: Object={
    dialogTitle: 'Selecione motivo da parada',
    optionsList: this.stopTypes
    }

    const stopType= await this.openSelectDialog(dialogData);
    if (!stopType) return;

    this.productionStatus = {
      color: ProductionStatusColors_e.Stop,
      status: ProductionStatus_e[stopType.value as keyof typeof ProductionStatus_e]
    }
  }


  openSelectDialog(dialogData: any): Promise<ProductionOrder> {
    console.log('aaaaaaa', this.productionOrders)
    const dialogRef: MatDialogRef<DialogSelect, any> = this.dialog.open(DialogSelect, {
      width: '950px',
      panelClass: 'custom-dialog',
      data:dialogData
    });

    return new Promise((resolve) => {
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      });
    });
  }
}
