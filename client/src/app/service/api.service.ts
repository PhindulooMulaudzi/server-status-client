import { Injectable } from '@angular/core';
import { ServerInfo } from '../add-server-dialog/add-server-dialog.component';
import { ServerStatus } from '../server-status/server-status.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SERVER_STATUS_DATA: ServerStatus[] = [
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
      ipAddress: '162.159.36.12',
      environment: 'PRODUCTION',
      status: 'DOWN',
    },
  ];

  dataSourceSubject: BehaviorSubject<ServerStatus[]> = new BehaviorSubject<
    ServerStatus[]
  >(this.SERVER_STATUS_DATA);

  constructor(private httpClient: HttpClient) {}

  getAllServers(): Observable<ServerStatus[]> {
    return this.dataSourceSubject.asObservable();
  }

  addNewServer(serverInfo: ServerInfo): void {
    if (serverInfo) {
      let serverStatus: ServerStatus = {
        name: serverInfo.serverName,
        ipAddress: serverInfo.ipAddress,
        environment: serverInfo.environment,
        status: 'DOWN',
      };

      this.SERVER_STATUS_DATA = [...this.SERVER_STATUS_DATA, serverStatus];
      this.dataSourceSubject.next(this.SERVER_STATUS_DATA);
    } else {
      console.log('Invalid ServerInfo object recieved..');
      alert('Failed to add new server...');
    }
  }

  pingServer(ipAddress: string): Boolean {
    let result = this.httpClient.get('').subscribe((data) => {
      return data;
    });
    return true;
  }
}
