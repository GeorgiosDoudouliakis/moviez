import { Directive } from "@angular/core";
import { ListViewDirective } from "@shared/components/list-view/directive/list-view.directive";

@Directive()
export abstract class TvSeriesDirective extends ListViewDirective {
    public onViewMore(): void {
        
    }
}