import { Component, inject } from '@angular/core';
import { TopRatedDirective } from "../../shared/directives/top-rated.directive";
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { TopRatedMoviesService } from "./services/top-rated-movies.service";
import { SectionHeaderComponent } from "../../shared/components/section-header/section-header.component";
import { CardComponent } from "@shared/components/card/card.component";
import { TopRatedMoviesMapperService } from './services/top-rated-movies-mapper.service';

@Component({
  selector: 'app-top-rated-movies',
  imports: [SkeletonComponent, SectionHeaderComponent, CardComponent],
  templateUrl: '../../shared/directives/top-rated.directive.html',
  styleUrl: '../../shared/directives/top-rated.directive.scss',
  providers: [TopRatedMoviesService, TopRatedMoviesMapperService]
})
export class TopRatedMoviesComponent extends TopRatedDirective {
  public title: string = "top rated movies";
  public showAllPath: string = "movies";
  public showAllLinkText: string = "View all movies";
  protected readonly service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
