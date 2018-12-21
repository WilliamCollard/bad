import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  pet = {
    "name": '',
    "type": '',
    "desc": '',
    "skill1": '',
    "skill2": '',
    "skill3": '',
  }
  errors = {};
  constructor(private _pService: PetService, private _router: Router)  { }

  ngOnInit() {
  }
  create(){
    let observable = this._pService.createPet(this.pet);
    observable.subscribe(data => {
      console.log(data);
      if (data['status'] == 'not ok'){
        this.errors = data['errors'] ['errors']; 
      }else{
        this._router.navigate(['/']);
      }
    });
  }
}
