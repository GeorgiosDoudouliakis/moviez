import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PersonWithPath } from "@shared/interfaces/persons-response.interface";

@Component({
  selector: 'app-person',
  imports: [RouterLink],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  public person = input.required<PersonWithPath>();
}
