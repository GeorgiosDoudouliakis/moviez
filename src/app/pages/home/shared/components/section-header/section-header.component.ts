import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-section-header',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  public title = input.required<string>();
  public showAllPath = input.required<string>();
  public showAllLinkText = input.required<string>();
}
