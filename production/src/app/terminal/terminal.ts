import { Component, inject } from '@angular/core';
import {ProductionControl} from '../production-control/production-control';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {DialogSelect} from '../dialog-select/dialog-select';
import productionOrders from '../../assets/files/production-orders.json';

@Component({  //indica que esse componente é um componente angular
  selector: 'app-terminal', //nome do componente
  imports: [ProductionControl], //outros componentes que esse componente usa
  templateUrl: './terminal.html',//caminho do arquivo html do componente
  styleUrl: './terminal.scss' //caminho do arquivo css do componente
})
export class Terminal {

  readonly dialog: MatDialog = inject(MatDialog);

    productionOrders: any[] = productionOrders;

  setProductionOrder() {
    console.log('Teste de evento click- Produção Iniciada');
    this.openSelectDialog();
  }

  openSelectDialog(): any {
    const dialogRef: MatDialogRef<DialogSelect, any> = this.dialog.open(DialogSelect, {
      width: '950px',
      panelClass: 'custom-dialog',
      data:{
        dialogTitle: 'Teste dialog', optionsList: this.productionOrders
      }
    });

    return new Promise((resolve) => {
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      });
    });
  }
}
