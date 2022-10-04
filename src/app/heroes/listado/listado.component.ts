import { Component} from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html'

})
export class listadoComponent{
    heroes:string[]=['Spiderman', 'Ironman', 'Hulk', 'Goku', "Cap.America" ] ;

    heroeBorrado:string=''

    borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    }
}

