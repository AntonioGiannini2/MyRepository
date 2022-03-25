import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  gamerReactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.gamerReactiveForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      content: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onCreateGamerTemplateDriven(gamerForm: NgForm){

  }

  onCreateGamerReactive() {
    
  }
}
