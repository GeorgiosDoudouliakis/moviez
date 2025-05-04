import { Component, input, InputSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tab } from '@shared/interfaces/tab.interface';

@Component({
  selector: 'app-tabs-view',
  imports: [RouterModule],
  templateUrl: './tabs-view.component.html',
  styleUrl: './tabs-view.component.scss'
})
export class TabsViewComponent {
  public tabs: InputSignal<Tab[]> = input.required<Tab[]>();
}
