import { Component } from '@angular/core';
import { TabsViewComponent } from '@shared/components/tabs-view/tabs-view.component';
import { Tab } from '@shared/interfaces/tab.interface';
import { MoviesMapperService } from '../shared/services/movies-mapper.service';

@Component({
  selector: 'app-movies',
  imports: [TabsViewComponent],
  template: `
    <app-tabs-view [tabs]="tabs"/>
  `,
  providers: [MoviesMapperService]
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
