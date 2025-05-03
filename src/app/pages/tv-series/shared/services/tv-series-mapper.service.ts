import { Injectable } from '@angular/core';
import { BaseResponse } from '@shared/interfaces/base-response.interface';
import { mapDate } from '@core/helpers/map-date.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';
import { Card } from '@shared/components/card/interface/card.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';

@Injectable()
export class TvSeriesMapperService {
  public mapTvSeries(tvSeries: BaseResponse<TvSerie>): BaseResponse<Card> {
    return {
      page: tvSeries.page,
      results: tvSeries.results.map((tvSerie: TvSerie) => ({
        id: tvSerie.id,
        title: tvSerie.name,
        imageSrc: tvSerie.poster_path ? mapImagePath(185, tvSerie.poster_path) : null,
        topRightContent: `${mapVoteAverage(tvSerie.vote_average)}`,
        details: [
          `${mapDate(tvSerie.first_air_date)}`,
          tvSerie.vote_count ? `Votes: ${tvSerie.vote_count}` : 'No votes yet',
        ],
        path: `/tv-series/${EncodingUtilities.encodeIdNameParam(tvSerie.id, tvSerie.name)}`
      })),
      total_pages: tvSeries.total_pages,
      total_results: tvSeries.total_results
    };
  }
}
