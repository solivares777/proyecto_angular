import { Component } from '@angular/core';
import { Renta } from './modelo/renta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'renta';

  renta:Renta = new Renta();

  constructor(){

  }

  ngOnInit(): void {
  }

  Guardar (renta:Renta){
    let flag1: number = 0;
    let flag2: number = 0;
    let flag3: number = 0;
    let flag4: number = 0;
    let flag5: number = 0;


    if (renta.noNit==null){
      alert("El No de nit esta vacio..."); 
      flag1=1;
    }

    if (renta.contribuyente==null){
        alert("El nombre esta vacio..."); 
        flag2=1;
    }

    if (renta.salarioMensual==null){
        alert("El salario mensual esta vacio..."); 
        flag3=1;
    }

    if (flag1==0 && flag2==0 && flag3==0){
      let isss: number=0; let afp: number=0;
      let salario: number;
      salario = renta.salarioMensual;

      if (salario<=1000.00){ 
           isss = salario * 3/100;
      } else {
           isss = 1000.00 * 3/100;
      }

      afp = salario*7.25/100;
      let deduccion = salario-isss-afp;

      let calculaRenta:number=0;

      if (deduccion>0.01 && deduccion<=472){
        calculaRenta = 0; 
        //alert("Tramo1");
      } else if (deduccion>=472.01 && deduccion<=895.24){ 
        calculaRenta = (deduccion - 472)*0.10 + 17.67; 
        //alert("Tramo2");
      } else if (deduccion>=895.25 && deduccion<=2038.10){ 
        calculaRenta = (deduccion - 895.24)*0.20 + 60; //alert("Tramo3");
      } else if (deduccion>=2038.11){
        calculaRenta = (deduccion - 2038.10)*0.30 + 288.57; 
        //alert("Tramo5");
      }

      let salarioLiquido=salario-isss-afp-calculaRenta;

      renta.salarioMensual=renta.salarioMensual;

      renta.isss=isss;
      renta.afp=afp;
      renta.salarioLiquido-salarioLiquido; renta.calculoRenta=calculaRenta;

      renta.calculoRenta=calculaRenta;
    
    } else {
        alert("Revise los campos...");
    }
  }
}