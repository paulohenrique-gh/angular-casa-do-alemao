import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../../../data';
import { CountryInfoService } from '../../services/country-info.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  galleryImages$!: Observable<GalleryImage[]>;

  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit(): void {
    this.galleryImages$ = this.countryInfoService.getImages();
  }

}
