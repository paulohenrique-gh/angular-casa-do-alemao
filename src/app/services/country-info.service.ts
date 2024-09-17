import { Injectable } from '@angular/core';
import { Country, GalleryImage, galleryImages, germanStates, germany, State } from '../../data';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {
  private country: BehaviorSubject<Country> = new BehaviorSubject<Country>(germany)
  private states: BehaviorSubject<State[]> = new BehaviorSubject<State[]>(germanStates);
  private galleryImages: BehaviorSubject<GalleryImage[]> = new BehaviorSubject<GalleryImage[]>(galleryImages);

  getCountry(): Observable<Country> {
    return this.country.asObservable();
  }

  getStates(): Observable<State[]> {
    return this.states.asObservable();
  }

  getImages(): Observable<GalleryImage[]> {
    return this.galleryImages.asObservable();
  }
}
