import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import appComponentTemplate from "./app.component.html";

@Component({
  selector: "app-root",
  template: appComponentTemplate,
  styles: [
    ` :host {
      font-family: 'Inter', sans-serif;
    }

    .animate-fade-in-down {
      animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
    }

    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    `
  ],
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