import { Component } from '@angular/core';

//decorador qu enos indica tres propiedades principalesque forman un componente
@Component({
  selector: 'app-root',
  /*template:`
  <div class='container'>
    <div class='row'>
      <div class='col-md-12'>
        <h1>Angular 2+ Tutorial</h1>
      </div>
      </div>
      </div>
  `,*/
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'basesAngular';
  dobleNumero(x:number):number{
    return x*2;
  }
  alumno={
    nombre:'Juan',
    edad:25,
    curso:'Angular',
    fechaInscrito:new Date(),
    pago:2220
  }
}
