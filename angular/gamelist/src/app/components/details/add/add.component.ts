import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Gamer } from 'src/app/models';
import { GamerFirebaseService } from 'src/app/services/gamer-firebase.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  gamerReactiveForm: FormGroup;
  gamers$?: Observable<Gamer[]>;
  selectedId?: string;

  constructor(private firebaseService: GamerFirebaseService, private fb: FormBuilder) {
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
    const postData = gamerForm.value;
    console.log(postData);
    //da finire
    //this.firebaseService.createAndStoreGamers(postData).subscribe() =>
  }

  onCreateGamerReactive() {

  }

  onDelete(gamerIdToDelete?: string): void {
    if (gamerIdToDelete) {
    this.firebaseService.deleteGamer(gamerIdToDelete).subscribe();
  }
}

  onSelectGamer(gamer: Gamer): void {
    this.selectedId = gamer.id;
    this.firebaseService.setCurrent(gamer);
  }
}
