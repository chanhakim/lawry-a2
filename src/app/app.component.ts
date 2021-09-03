import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lawry-a2';

  toggleMenu() {
    var x = document.getElementById("menu-rows")!;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  closeMenu() {
    var x = document.getElementById("menu-rows")!;
    x.style.display = "none";
  }
}
