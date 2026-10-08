import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListFaq } from "./list-faq/list-faq";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FAQ-project');
}
