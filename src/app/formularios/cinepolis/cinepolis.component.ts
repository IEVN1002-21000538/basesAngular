import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  formulario!: FormGroup;
  valorPagar!: number;
  mensaje!: string;
  detallesCompra!: string;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      cantidadCompradores: new FormControl('', [Validators.required, Validators.min(1)]),
      cantidadBoletos: new FormControl('', [Validators.required, Validators.min(1)]),
      tarjetaCineco: new FormControl('no', Validators.required)
    });
  }

  procesarCompra(): void {
    const nombre = this.formulario.get('nombre')?.value;
    const cantidadCompradores = this.formulario.get('cantidadCompradores')?.value;
    const cantidadBoletos = this.formulario.get('cantidadBoletos')?.value;
    const tarjetaCineco = this.formulario.get('tarjetaCineco')?.value;

    const maxBoletosPorComprador = 7;
    const maxBoletos = cantidadCompradores * maxBoletosPorComprador;

    let total = cantidadBoletos * 12; 
    let descuento = 0;
    this.mensaje = '';


    if (cantidadBoletos > maxBoletos) {
      this.mensaje = `No se pueden comprar más de ${maxBoletos} boletos para ${cantidadCompradores} compradores.<br>(7 boletos por comprador)`;
      return; 
    }

 
    if (cantidadBoletos > 5) {
      descuento = 15;
      total *= 0.85; 
    } else if (cantidadBoletos >= 3 && cantidadBoletos <= 5) {
      descuento = 10;
      total *= 0.90; 
    }


    if (tarjetaCineco === 'si') {
      this.mensaje += 'Se aplicó un 10% de descuento adicional por pagar con la tarjeta Cineco.\n';
      total *= 0.90; 
    }

    this.valorPagar = total;


    this.detallesCompra = `Comprador: ${nombre}<br>Compradores: ${cantidadCompradores}<br>Boletos: ${cantidadBoletos}<br>Descuento aplicado: ${descuento}%`;

  }
}
