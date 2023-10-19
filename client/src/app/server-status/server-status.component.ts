import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs';
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

  pingServer(server: ServerStatus) {
    let idxOf = this.dataSource.indexOf(server);
    let response = this.apiService.pingServer(server.ipAddress).pipe(
      map((result) => {
        console.log(result);
        if (result.data && result.data['response'])
          return result.data['response'];
        return 'false';
      })
    );
    let status = response ? 'UP' : 'DOWN';
    server.status = status;

    console.log(response);

    if (idxOf) {
      this.dataSource[idxOf] = server;
    }
  }
}
