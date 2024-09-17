import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Country } from '../../../data';
import { Subscription } from 'rxjs';
import { CountryInfoService } from '../../services/country-info.service';
import { CommonModule } from '@angular/common';
import { SplitParagraphPipe } from '../../pipes/split-paragraph.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, SplitParagraphPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  country!: Country;
  subscription!: Subscription;

  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit(): void {
    this.subscription = this.countryInfoService.getCountry().subscribe({
      next: (country) => this.country = country,
      error: (error) => console.log(error)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
