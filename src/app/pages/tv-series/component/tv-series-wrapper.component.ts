import { Component } from '@angular/core';
import { TabsViewComponent } from '@shared/components/tabs-view/tabs-view.component';
import { Tab } from '@shared/interfaces/tab.interface';
import { TvSeriesMapperService } from '../shared/services/tv-series-mapper.service';

@Component({
  selector: 'app-tv-series',
  imports: [TabsViewComponent],
  template: `
    <app-tabs-view [tabs]="tabs"/>
  `,
  providers: [TvSeriesMapperService]
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
