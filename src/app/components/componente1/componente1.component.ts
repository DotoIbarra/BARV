import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {

  @Input() nomb: string = "";
  @Input() apelli: string = "";
  constructor() { }

  ngOnInit() {}

}
