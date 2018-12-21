import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  pet: any;
  constructor(private _pservice : PetService, private _router: Router, private _route: ActivatedRoute)  { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      this.getOnePet(params['id']);
    })
  }

  getOnePet(id){
    let observable = this._pservice.getPet(id);
    observable.subscribe( data => {
    this.pet = data['pet']
    });
  }
  
  delete(id){
    let observable = this._pservice.deleteOne(id, this.pet);
    observable.subscribe(data => {
      this._router.navigate(['/']);
    })
  }
}
