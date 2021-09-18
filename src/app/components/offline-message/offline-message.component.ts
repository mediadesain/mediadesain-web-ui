import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/shared/services/conection.service';

@Component({
  selector: 'app-offline-message',
  templateUrl: './offline-message.component.html',
  styleUrls: ['./offline-message.component.scss']
})
export class OfflineMessageComponent implements OnInit {

  constructor(
    public connectionSrvc: ConnectionService,
    public location: Location
  ) { }

  ngOnInit(): void {
  }

}
