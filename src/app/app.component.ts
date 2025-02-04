import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewNuumberComponent } from "./view-nuumber/view-nuumber.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewNuumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'viewNumber';
}
