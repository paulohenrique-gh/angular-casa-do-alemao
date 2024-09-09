import { Injectable } from '@angular/core';
import { GalleryImage, galleryImages, germanStates, State } from '../../data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {
  private states: BehaviorSubject<State[]> = new BehaviorSubject<State[]>(germanStates);
  private galleryImages: BehaviorSubject<GalleryImage[]> = new BehaviorSubject<GalleryImage[]>(galleryImages);

  constructor() { }

  getStates(): Observable<State[]> {
    return this.states.asObservable();
  }

  getImages(): Observable<GalleryImage[]> {
    return this.galleryImages.asObservable();
  }
}
