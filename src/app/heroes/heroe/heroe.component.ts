import { Component } from "@angular/core";


@Component({
    selector:'app-hero',
    templateUrl: 'heroe.component.html'

})
export class heroecomponent{

    name: string = 'iroman';
    age : number = 19;
}