import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../service/api.service';

export interface ServerInfo {
  serverName: string;
  ipAddress: string;
  environment: string;
}

@Component({
  selector: 'app-add-server-dialog',
  templateUrl: './add-server-dialog.component.html',
  styleUrls: ['./add-server-dialog.component.css'],
})
export class AddServerDialogComponent {
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddServerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ServerInfo
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Assuming you have a service to handle this data
    this.dialogRef.close();
    this.apiService.addNewServer(this.data);
  }
}
