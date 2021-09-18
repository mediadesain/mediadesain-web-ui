import { Component } from '@angular/core';
import { ConnectionService } from './shared/services/conection.service';
import { DyamicTitlebarService } from './shared/services/dynamic-titlebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public connectionSrvc : ConnectionService,
    public dynamicTitlebarSrvc: DyamicTitlebarService
  ) {}

}
