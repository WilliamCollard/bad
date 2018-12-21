import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get('/pets')
  }

  createPet(pet){
    return this._http.post('/pet/new', pet)
  }

  getPet(id){
    return this._http.get(`/pets/${id}`);
  }

  updateOne(id, pet){
    return this._http.put(`/pet/${id}`, pet)
  }

  deleteOne(id){
    return this._http.delete(`/pet/${id}`);
  }

}
