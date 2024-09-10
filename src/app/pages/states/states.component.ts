import { Component, OnDestroy, OnInit } from '@angular/core';
import { State } from '../../../data';
import { CountryInfoService } from '../../services/country-info.service';
import { SplitParagraphPipe } from '../../pipes/split-paragraph.pipe';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from "../../components/stat-card/stat-card.component";
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [SplitParagraphPipe, CommonModule, StatCardComponent, HeaderComponent],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss',
  host: { class: 'w-full flex gap-8' },
})
export class StatesComponent implements OnInit, OnDestroy {
  states: State[] = [];
  selectedState!: State | undefined;
  subscription!: Subscription;

  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit(): void {
    this.subscription = this.countryInfoService.getStates().subscribe({
      next: (states) => {
        this.states = states;
        this.selectedState = states.find(state => state.name === 'Berlin');
      },
      error: (error) => console.log(error),
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  selectState(id: number): void {
    this.selectedState = this.states.find(state => state.id === id);
  }
}
