import { Component } from '@angular/core';
import { ViewWithFiltersComponent } from '@shared/components/view-with-filters/view-with-filters.component';
import { Tab } from '@shared/interfaces/tab.interface';

@Component({
  selector: 'app-tv-series',
  imports: [ViewWithFiltersComponent],
  template: `
    <app-view-with-filters [tabs]="tabs"/>
  `
})
export class TvSeriesWrapperComponent {
  public tabs: Tab[] = [
    {
      id: "Airing today",
      name: "Airing today",
      path: "airing-today"
    },
    {
      id: "On the air",
      name: "On the air",
      path: "on-the-air"
    },
    {
      id: "Popular",
      name: "Popular",
      path: "popular"
    },
    {
      id: "Top rated",
      name: "Top rated",
      path: "top-rated"
    }
  ];
}
