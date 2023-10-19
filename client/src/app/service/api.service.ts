import { Injectable } from '@angular/core';
import { ServerInfo } from '../add-server-dialog/add-server-dialog.component';
import { ServerStatus } from '../server-status/server-status.component';
import { Observable, map, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from './response';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  serverStatusList: ServerStatus[] = [];
  constructor(private httpClient: HttpClient) {}
  apiUrl: string = 'http://localhost:4201';
  getAllServers(): Observable<ServerStatus[]> {
    return this.httpClient
      .get<CustomResponse>(`${this.apiUrl}/api/v1/servers`)
      .pipe(
        catchError((error) => {
          console.log(error);
          return throwError('Something went wrong, did not get servers');
        }),
        map((result) => {
          if (result && result.data) return result.data['servers'];
          return [];
        })
      );
  }

  addNewServer(serverInfo: ServerInfo): void {
    if (serverInfo) {
      let serverStatus: ServerStatus = {
        name: serverInfo.serverName,
        ipAddress: serverInfo.ipAddress,
        environment: serverInfo.environment,
        status: 'DOWN',
      };

      this.serverStatusList = [...this.serverStatusList, serverStatus];
    } else {
      console.log('Invalid ServerInfo object recieved..');
      alert('Failed to add new server...');
    }
  }

  pingServer(ipAddress: string): Boolean {
    this.httpClient.get<CustomResponse>(
      `${this.apiUrl}/api/v1/ping/${ipAddress}`
    );
    let result = this.httpClient.get('').subscribe((data) => {
      return data;
    });
    return true;
  }
}
