import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})

export class LanguageComponent implements OnInit {
  dlgChangeLanguage: boolean = false;
  listLanguage: Language[] | undefined;
  selectedLanguage: Language | undefined;

  constructor(
    private translate: TranslateService
  ) {
    const savedLanguage = localStorage.getItem('localLang') || window.navigator.language;
    this.translate.setDefaultLang(window.navigator.language);
    this.translate.use(savedLanguage);
  }

  ngOnInit(): void {
    this.listLanguage = [
      {name: 'Português', code: 'pt-BR'},
      {name: 'English', code: 'en'}
    ]
  }

  openDialogChangeLanguage() {
    this.dlgChangeLanguage = true;
  }

  closeDialogChangeLanguage() {
    this.dlgChangeLanguage = false;
  }

  switchLanguage(language: any) {
    this.translate.use(language.code);
    localStorage.setItem('localLang', language.code);
    this.closeDialogChangeLanguage();
  }
}
