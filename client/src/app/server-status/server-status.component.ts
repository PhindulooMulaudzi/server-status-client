import { Component, OnInit, OnDestroy } from '@angular/core';
import { catchError, map, switchMap, throwError } from 'rxjs';
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
export class ServerStatusComponent implements OnInit, OnDestroy {
  dataSource!: ServerStatus[];

  displayedColumns: string[] = [
    'name',
    'ipAddress',
    'environment',
    'status',
    'ping',
  ];

  constructor(private apiService: ApiService) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.apiService.getAllServers().subscribe((data) => {
      this.dataSource = data;
    });
  }

  pingServer(serverStatus: ServerStatus) {
    this.apiService
      .pingServer(serverStatus.ipAddress)
      .pipe(
        catchError((error) => {
          console.log('Got errir while trying to ping the server...');
          return throwError(error);
        }),
        switchMap((result) => {
          if (result && result.data && this.dataSource) {
            const response = result.data['response'];
            const idx = this.dataSource.indexOf(serverStatus);
            const status = response ? 'UP' : 'DOWN';
            this.dataSource[idx].status = status;
          }
          return [];
        })
      )
      .subscribe(
        () => {},
        (error) => {
          console.error('Error in subscription:', error);
        }
      );
  }
}
