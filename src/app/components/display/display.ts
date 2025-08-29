import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HousingService } from '../../services/housing';
import { VacationLocation } from '../../interfaces/vacation-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './display.html',
  styleUrl: './display.scss',
})
export class Display {
  vacationLocationList: VacationLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: VacationLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((vacationLocationList: VacationLocation[]) => {
        this.vacationLocationList = vacationLocationList;
        this.filteredLocationList = vacationLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.vacationLocationList;
      return;
    }

    this.filteredLocationList = this.vacationLocationList.filter((location) =>
      location?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
