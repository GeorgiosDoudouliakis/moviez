import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-section-header',
  imports: [RouterLink],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  public title: InputSignal<string> = input.required<string>();
  public showAllPath: InputSignal<string | undefined> = input<string>();
  public showAllLinkText: InputSignal<string | undefined> = input<string>();
}
