import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pets = [];

  constructor(private _pservice: PetService) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets(){
    let observable = this._pservice.getPets();
    observable.subscribe(data => {
      this.pets = data['pets'];
      console.log(data); 
    });
  }

}
