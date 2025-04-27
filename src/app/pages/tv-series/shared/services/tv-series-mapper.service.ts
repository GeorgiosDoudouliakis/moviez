import { Injectable } from '@angular/core';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';

@Injectable()
export class TvSeriesMapperService {
  public mapTvSeries(tvSeries: BaseResponse<TvSerie>): BaseResponse<TvSerie> {
    return {
      page: tvSeries.page,
      results: tvSeries.results.map((tvSerie: TvSerie) => ({
        ...tvSerie,
        first_air_date: mapDate(tvSerie.first_air_date),
        vote_average: mapVoteAverage(tvSerie.vote_average)
      })),
      total_pages: tvSeries.total_pages,
      total_results: tvSeries.total_results
    };
  }
}
