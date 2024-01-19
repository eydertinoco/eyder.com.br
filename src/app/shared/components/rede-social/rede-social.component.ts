import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rede-social',
  templateUrl: './rede-social.component.html',
  styleUrls: ['./rede-social.component.scss']
})

export class RedeSocialComponent implements OnInit {

  redesSociais = [
    {
      link: 'https://github.com/eydertinoco',
      icon: 'assets/svg/github.svg',
      name: 'GitHub',
    },
    {
      link: 'https://www.linkedin.com/in/eyder-tinoco-ferreira-neto-91337a155/',
      icon: 'assets/svg/linkedin.svg',
      name: 'Linkedin',
    },
    {
      link: 'https://web.whatsapp.com/send?phone=5582999221574',
      icon: 'assets/svg/whatsapp.svg',
      name: 'Whatsapp',
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
