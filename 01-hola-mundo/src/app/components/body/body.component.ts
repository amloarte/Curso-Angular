import { Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})



export class BodyComponent {
    title  = 'Hellol World..!';
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben parquer'
    };

    mostrar = false;

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
