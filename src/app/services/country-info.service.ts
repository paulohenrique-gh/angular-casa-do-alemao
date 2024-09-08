import { Injectable } from '@angular/core';
import { germanStates, State } from '../../data';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {
  private states: BehaviorSubject<State[]> = new BehaviorSubject<State[]>(germanStates);

  constructor() { }

  getStates(): Observable<State[]> {
    return this.states.asObservable();
  }
}
