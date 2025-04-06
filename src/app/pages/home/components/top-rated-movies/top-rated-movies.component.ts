import { Component, inject } from '@angular/core';
import { TopRatedDirective } from "../../shared/directives/top-rated.directive";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { TopRatedMoviesService } from "../../services/top-rated-movies.service";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { CardComponent } from "@shared/components/card/card.component";

@Component({
  selector: 'app-top-rated-movies',
  imports: [LoaderComponent, SectionHeaderComponent, CardComponent],
  templateUrl: '../../shared/directives/top-rated.directive.html',
  styleUrl: '../../shared/directives/top-rated.directive.scss',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends TopRatedDirective {
  public title: string = "top rated movies";
  public showAllPath: string = "movies";
  public showAllLinkText: string = "View all movies";
  protected service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
