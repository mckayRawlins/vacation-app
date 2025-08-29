import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TopNavbar } from './components/top-navbar/top-navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, TopNavbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('vacation-app');
}
