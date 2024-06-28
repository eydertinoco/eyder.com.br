import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})

export class PortifolioComponent implements OnInit {

  sobremin_texto1: string =
    "Sou desenvolvedor front-end. Tenho experiência na criação e manutenção de projetos webs em JSF e Angular. " +
    "Tenho bom conhecimento com NestJs e Java para desenvolvimento back-end. Dedico meu tempo livre para " +
    "aprender e me especializar, estudando novas tecnologias e aplicando-as em projetos pessoais para aprimorar " +
    "a técnica e meu entendimento.";

  sobremin_texto2: string =
    "i'm front-end developer. I’ve experience with creating and maintaining web projects with JSF and Angular." +
    " I've good knowledge with NestJs and Java. I don’t stop studying new tecnologies in my free time, because " +
    "i like to apply in my personal projects and learning."

  myExperienceMaceio = [
    {
      nome: "Prefeitura de Maceió",
      dataEntrada: "Dezembro 2020",
      dataSaida: "Maio 2022",
      status: "Estágio",
      descricao: "Atuando no desenvolvimento web, especificamente no front-end, utilizando o framework PrimeFaces. " +
        "Aprendendo na pratica a influência das aplicações back-end no desenvolvimento e as influências de um " +
        "framework dentro de um projeto web junto com uma equipe de sucesso.",
    },
    {
      nome: "Projeto ALEX",
      dataEntrada: "Setembro 2021",
      dataSaida: "Fevereiro 2022",
      status: "Bolsista",
      descricao: "Integrante do Projeto ALEX: Concepção e Implementação de uma plataforma virtual para a Educação " +
        "Híbrida Inclusiva e Centrado no Estudante, idealizado e ministrado pelo Professor Breno Jacinto Duarte da " +
        "Costa, atuando no front-end com o framework Vue.js."
    },
    {
      nome: "Indra Company",
      dataEntrada: "Maio 2022",
      dataSaida: "Dezembro 2022",
      status: "Júnior",
      descricao: "Trabalho em desenvolvimento web como programador júnior, especificamente no front-end, de forma" +
        " hibrida. Faço manutenções em projetos antigos e crio novas aplicações web, buscando entregar uma" +
        " codificação de fácil leitura e documentação no prazo definido.",
    },
    {
      nome: "Sistematech",
      dataEntrada: "Dezembro 2022",
      dataSaida: "Atualmente",
      status: "Pleno",
      descricao: "Trabalho com desenvolvimento web com desenvolvedor pleno, especificamente no front-end, de forma" +
        " hibrida. Faço manutenções em projetos antigos e crio novas aplicações web em conjunto com o cliente, " +
        "buscando entregar uma codificação de fácil leitura e documentado no prazo definido.",
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
