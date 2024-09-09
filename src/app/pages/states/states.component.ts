import { Component, OnInit } from '@angular/core';
import { State } from '../../../data';
import { CountryInfoService } from '../../services/country-info.service';
import { SplitParagraphPipe } from '../../pipes/split-paragraph.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [SplitParagraphPipe, CommonModule],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss',
  host: { class: 'w-full' },
})
export class StatesComponent implements OnInit {
  states: State[] = [];
  selectedState!: State | undefined;

  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit(): void {
    this.countryInfoService.getStates().subscribe({
      next: (states) => {
        this.states = states;
        this.selectedState = states.find(state => state.name === 'Berlin');
      },
      error: (error) => console.log(error),
    });
  }

  selectState(id: number): void {
    this.selectedState = this.states.find(state => state.id === id);
  }
}
