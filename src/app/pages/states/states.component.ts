import { Component, OnInit } from '@angular/core';
import { State } from '../../../data';
import { CountryInfoService } from '../../services/country-info.service';
import { SplitParagraphPipe } from '../../pipes/split-paragraph.pipe';

@Component({
  selector: 'app-states',
  standalone: true,
  imports: [SplitParagraphPipe],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss',
  host: { class: 'w-full' },
})
export class StatesComponent implements OnInit {
  states: State[] = [];

  testContent = `Renânia-Palatinado é uma região conhecida por seus vinhos de alta qualidade, especialmente os produzidos ao longo do rio Reno e do rio Mosela. O estado está localizado no oeste da Alemanha e possui uma paisagem marcada por colinas, florestas e vinhedos. Mainz, a capital, é uma das cidades mais antigas da Alemanha e um importante centro cultural e universitário.

    O estado é famoso pela sua produção vinícola, sendo o maior produtor de vinhos da Alemanha. A região vinícola do Mosela é reconhecida mundialmente pela qualidade de seus vinhos brancos, especialmente o Riesling. Essa tradição vinícola faz parte da identidade cultural e econômica do estado.

    Além disso, o estado tem uma rica herança histórica, com muitos castelos medievais, igrejas e vilas pitorescas. As cidades e vilarejos de Renânia-Palatinado são destinos turísticos populares, atraindo visitantes interessados em sua história, cultura e belezas naturais.`;

  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit(): void {
    console.log('init');
    this.countryInfoService.getStates().subscribe({
      next: (states) => (this.states = states),
      error: (error) => console.log(error),
    });
  }
}
