import { Injectable } from '@angular/core';
import { TvSerie } from '@shared/interfaces/tv-series-response.interface';
import { mapImagePath } from '@core/helpers/map-image-path.helper';
import { mapVoteAverage } from '@core/helpers/map-vote-average.helper';
import { mapDate } from '@core/helpers/map-date.helper';
import { EncodingUtilities } from '@core/utilities/encoding.utilities';
import { Card } from '@shared/components/card/interface/card.interface';

@Injectable()
export class TopRatedTvSeriesMapperService {
  public mapTopRatedTvSeries(tvSeries: TvSerie[]): Card[] {
    return tvSeries.map((tvSerie: TvSerie) => ({
      id: tvSerie.id,
      title: tvSerie.name,
      imageSrc: tvSerie.poster_path ? mapImagePath(185, tvSerie.poster_path) : null,
      topRightContent: `${mapVoteAverage(tvSerie.vote_average)}`,
      details: [`${mapDate(tvSerie.first_air_date)}`],
      path: `/tv-series/${EncodingUtilities.encodeIdNameParam(tvSerie.id, tvSerie.name)}`
    }));
  }
}
