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

  sobremin_texto2: string =
    "i'm front-end developer. I’ve experience with creating and maintaining web projects with JSF and Angular." +
    " I've good knowledge with NestJs and Java. I don’t stop studying new tecnologies in my free time, because " +
    "i like to apply in my personal projects and learning."

  constructor() {
  }

  ngOnInit(): void {
  }
}
