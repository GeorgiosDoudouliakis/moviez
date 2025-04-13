import { Component } from '@angular/core';
import { ViewWithFiltersComponent } from '@shared/components/view-with-filters/view-with-filters.component';
import { Tab } from '@shared/interfaces/tab.interface';

@Component({
  selector: 'app-movies',
  imports: [ViewWithFiltersComponent],
  template: `
    <app-view-with-filters [tabs]="tabs"/>
  `
})
export class MoviesWrapperComponent {
  public tabs: Tab[] = [
    {
      id: "Now playing",
      name: "Now playing",
      path: "now-playing"
    },
    {
      id: "Popular",
      name: "Popular",
      path: "popular"
    },
    {
      id: "Top Rated",
      name: "Top rated",
      path: "top-rated"
    },
    {
      id: "Upcoming",
      name: "Upcoming",
      path: "upcoming"
    }
  ];
}
