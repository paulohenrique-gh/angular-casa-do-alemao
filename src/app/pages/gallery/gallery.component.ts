import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../../../data';
import { CountryInfoService } from '../../services/country-info.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [AsyncPipe, HeaderComponent],
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
