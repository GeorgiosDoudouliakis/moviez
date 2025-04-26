import { Component, input, InputSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab } from '@shared/interfaces/tab.interface';

@Component({
  selector: 'app-view-with-filters',
  imports: [RouterModule],
  templateUrl: './view-with-filters.component.html',
  styleUrl: './view-with-filters.component.scss'
})
export class ViewWithFiltersComponent {
  public tabs: InputSignal<Tab[]> = input.required<Tab[]>();
}
