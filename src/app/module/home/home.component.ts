import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  sobremin_texto1: string =
    "Sou desenvolvedor front-end. Tenho experiência na criação e manutenção de projetos webs em JSF e Angular. " +
    "Tenho bom conhecimento com NestJs e Java para desenvolvimento back-end. Dedico meu tempo livre para " +
    "aprender e me especializar, estudando novas tecnologias e aplicando-as em projetos pessoais para aprimorar " +
    "a técnica e meu entendimento.";

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

  sections: any;

  constructor() {
  }

  ngOnInit(): void {
    this.sections = document.querySelectorAll('.hiddenSection');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('showSection');
        } else {
          entry.target.classList.remove('showSection');
        }
      })
    })

    this.sections.forEach((section: any) => observer.observe(section));
  }

}
