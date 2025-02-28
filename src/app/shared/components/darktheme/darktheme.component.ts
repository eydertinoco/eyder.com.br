import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-darktheme',
  templateUrl: './darktheme.component.html',
  styleUrls: ['./darktheme.component.scss']
})

export class DarkthemeComponent implements OnInit {
  dark_theme = localStorage.getItem('darktheme') === 'true';

  constructor() {
  }

  ngOnInit(): void {
    this.applyDarkThemeOnInit();
  }

  async toggleDarkMode() {
    let element = document.body;
    this.dark_theme = !this.dark_theme;
    if (this.dark_theme) {
      element.classList.add("darkTheme");
    } else {
      element.classList.remove("darkTheme");
    }
    localStorage.setItem('darktheme', this.dark_theme.toString());
  }

  applyDarkThemeOnInit() {
    if(this.dark_theme) {
      document.body.classList.add("darkTheme")
    }
  }
}
