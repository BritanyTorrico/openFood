import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  sidebarItems=[
    {label:'Listado', icon:' label', url:'./list'},
    {label:'Añadir', icon:' add', url:'./new-product'},
    {label:'Buscar', icon:' search', url:'./search'},

  ]
}
