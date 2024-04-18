import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AffiliateComponent } from './affiliate/affiliate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AffiliateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'affilatehelp';
}
