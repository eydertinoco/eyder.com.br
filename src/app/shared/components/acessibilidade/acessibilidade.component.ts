import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})

export class AcessibilidadeComponent implements OnInit {

  font_size = 16;
  dark_theme = localStorage.getItem('darktheme') === 'true';

  constructor() { }
  ngOnInit(): void {
    this.applyDarkThemeOnInit();
    this.changeIconTheme();
  }

  async setFontSize(value: string) {
    if (value === 'a-') {
      this.font_size -= 1;
    } else if (value === 'a+') {
      this.font_size += 1;
    } else {
      this.font_size = 16;
    }

    let htmlRoot:HTMLElement = <HTMLElement> document.getElementsByTagName("html")[0];
    if (htmlRoot != null) {
      htmlRoot.style.fontSize = `${this.font_size}px`;
    }
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

  changeIconTheme() {
    console.log(document.getElementById("changeTheme"));
  }
  applyDarkThemeOnInit() {
    if(this.dark_theme) {
      document.body.classList.add("darkTheme")
    }
  }

}
