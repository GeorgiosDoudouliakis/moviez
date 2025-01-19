import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TopRatedDirective } from "../../directives/top-rated.directive";
import { LoaderComponent } from "@shared/components/loader/loader.component";
import { TopRatedMoviesService } from "../../../services/top-rated-movies.service";

@Component({
  selector: 'app-top-rated-movies',
  imports: [RouterLink, LoaderComponent],
  templateUrl: '../../directives/top-rated.directive.html',
  styleUrl: '../../directives/top-rated.directive.scss',
  providers: [TopRatedMoviesService]
})
export class TopRatedMoviesComponent extends TopRatedDirective {
  public title: string = "Top rated movies";
  public showAllPath: string = "";
  protected service: TopRatedMoviesService = inject(TopRatedMoviesService);
}
