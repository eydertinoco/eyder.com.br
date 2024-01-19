import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})

export class YoutubeComponent implements OnInit {

  youtubeList = [
    {
      id: 1,
      banner: 'https://img.cybercook.com.br/receitas/18/pao-de-queijo-12.jpeg',
      title: 'Receita de pão de queijo',
      link: 'www.youtube.com'
    },
    {
      id: 2,
      banner: 'https://www.udacity.com/blog/wp-content/uploads/2020/06/HTML_Blog-scaled.jpeg',
      title: 'O que é HTML?',
      link: 'www.youtube.com'
    },
    {
      id: 3,
      banner: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/03/como-adicionar-css-no-html-sem-tag.webp',
      title: 'O que é CSS?',
      link: 'www.youtube.com'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
