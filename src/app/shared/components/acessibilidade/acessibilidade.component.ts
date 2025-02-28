import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})

export class AcessibilidadeComponent implements OnInit {

  font_size = 16;
  dark_theme = localStorage.getItem('darktheme') === 'true';
  dlgChangeLanguage: boolean = false;

  listLanguage: Language[] | undefined;
  selectedLanguage: Language | undefined;

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(window.navigator.language);
  }
  ngOnInit(): void {
    this.applyDarkThemeOnInit();
    this.listLanguage = [
      {name: 'Português', code: 'pt-BR'},
      {name: 'English', code: 'en'}
    ]
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

  applyDarkThemeOnInit() {
    if(this.dark_theme) {
      document.body.classList.add("darkTheme")
    }
  }

  openDialogChangeLanguage() {
    this.dlgChangeLanguage = true;
  }

  switchLanguage(language: any) {
    this.translate.use(language.code);
    this.closeDialogChangeLanguage();
  }

  closeDialogChangeLanguage() {
    this.dlgChangeLanguage = false;
  }
}
