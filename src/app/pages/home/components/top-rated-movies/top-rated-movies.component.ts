import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TopRatedDirective } from "../../shared/directives/top-rated.directive";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { TopRatedMoviesService } from "../../services/top-rated-movies.service";
import { TopRatedType } from "../../shared/enums/top-rated-type.enum";

@Component({
  selector: 'app-top-rated-movies',
  imports: [RouterLink, LoaderComponent],
  templateUrl: '../../shared/directives/top-rated.directive.html',
  styleUrl: '../../shared/directives/top-rated.directive.scss',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends TopRatedDirective {
  public type: TopRatedType = TopRatedType.MOVIES;
  public showAllPath: string = "";
  protected service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
