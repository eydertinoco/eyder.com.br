import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessibilidade',
  templateUrl: './acessibilidade.component.html',
  styleUrls: ['./acessibilidade.component.scss']
})

export class AcessibilidadeComponent implements OnInit {

  font_size = 16;


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

  constructor() { }
  ngOnInit(): void {

  }
}
