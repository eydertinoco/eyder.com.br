import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vlibras',
  templateUrl: './vlibras.component.html',
  styleUrls: ['./vlibras.component.scss']
})

export class VlibrasComponent implements OnInit {

  scriptSrc: string = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script: any

  constructor() { }
  ngOnInit(): void {
    this.script = document.createElement('script')
    this.script.src = this.scriptSrc
    this.script.async = true
    this.script.onload = (load: any) => {
      // @ts-ignore
      new window.VLibras.Widget(this.widgetSrc)
    }
    document.head.appendChild(this.script)
  }
}
