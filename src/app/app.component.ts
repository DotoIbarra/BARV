import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: '/folder/inbox', icon: 'person-circle' },
    { title: 'Editar Perfil', url: '/folder/archived', icon: 'build' },
    { title: 'Reclamo', url: '/folder/spam', icon: 'alert-circle' },
    { title: 'Cerrar Sesión', url: '/folder/trash', icon: 'exit' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
