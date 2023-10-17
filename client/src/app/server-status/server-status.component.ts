import { Component } from '@angular/core';

// Status payload
export interface ServerStatus {
  name: string;
  ipAddress: string;
  environment: string;
  status: string;
}

const SERVER_STATUS_DATA: ServerStatus[] = [
  {
    name: 'Movies Server',
    ipAddress: '192.168.8.1',
    environment: 'PRODUCTION',
    status: 'DOWN',
  },
  {
    name: 'Games Server',
    ipAddress: '192.168.8.2',
    environment: 'PRODUCTION',
    status: 'DOWN',
  },
  {
    name: 'Profiles Server',
    ipAddress: '192.168.8.3',
    environment: 'DEVELOPMENT',
    status: 'DOWN',
  },
  {
    name: 'Profiles Server',
    ipAddress: '192.168.8.4',
    environment: 'PRODUCTION',
    status: 'DOWN',
  },
];

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrls: ['./server-status.component.css'],
})
export class ServerStatusComponent {
  displayedColumns: string[] = [
    'name',
    'ipAddress',
    'environment',
    'status',
    'ping',
  ];
  dataSource = SERVER_STATUS_DATA;

  pingServer(server: ServerStatus) {
    console.log('Pinging: ' + server.ipAddress);
  }
}
