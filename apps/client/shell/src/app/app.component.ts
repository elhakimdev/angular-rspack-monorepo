import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import appComponentTemplate from "./app.component.html";
import { AsyncPipe } from "@angular/common";
@Component({
  selector: "app-root",
  template: appComponentTemplate,
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [RouterOutlet, AsyncPipe]
})
export class AppComponent {
  counter = signal(0);
  counter$ = this.counter.asReadonly();

  increment() {
    this.counter.update((value) => value + 1);
    console.log('counter value:', this.counter());
  } 
}