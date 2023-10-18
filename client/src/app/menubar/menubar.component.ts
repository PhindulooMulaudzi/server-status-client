import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  AddServerDialogComponent,
  ServerInfo,
} from '../add-server-dialog/add-server-dialog.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddServerDialogComponent, {
      width: '260px',
      data: {},
    });
  }
}
