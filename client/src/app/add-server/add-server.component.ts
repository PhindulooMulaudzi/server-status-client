import { OnInit, Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

export const Server = {};

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css'],
})
export class AddServerComponent implements OnInit {
  serverForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.serverForm = formBuilder.group({});
  }
  ngOnInit(): void {
    this.serverForm = this.formBuilder.group({
      name: new FormControl(''),
      ipAddress: new FormControl(''),
      Environment: new FormControl(''),
    });
  }
}
