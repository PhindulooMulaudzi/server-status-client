import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

// Status payload
export interface ServerStatus {
  name: string;
  ipAddress: string;
  environment: string;
  status: string;
}

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css'],
})
export class ServerStatusComponent implements OnInit {
  dataSource!: ServerStatus[];

  displayedColumns: string[] = [
    'name',
    'ipAddress',
    'environment',
    'status',
    'ping',
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllServers().subscribe((data) => {
      this.dataSource = data;
    });
  }

  pingServer(server: ServerStatus) {
    console.log('Pinging: ' + server.ipAddress);
  }
}
