import { Component, OnInit } from '@angular/core';
import { SkillLevel } from "../../shared/enums/skill-level.enum";
import { Introduction } from "../../shared/enums/introduction.enum";
import { TecnologyService } from "../../services/TecnologyService";

interface Tecnology {
  tecnologyName: string;
  mySkillLevel: SkillLevel;
  tecnologyImg: string;
}

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent implements OnInit {
  aboutMe: String | undefined = Introduction.ABOUT_ME_POR;

  listTecnologys: Tecnology[] = [];

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

  constructor(private tecnologyService: TecnologyService) {
  }

  ngOnInit(): void {
    this.tecnologyService.getTecnologies().subscribe(data => {
      this.listTecnologys = data.map(tecnology => ({
        tecnologyName: tecnology.tecnologyName,
        mySkillLevel: this.mapSkillLevel(tecnology.mySkillLevel),
        tecnologyImg: tecnology.tecnologyImg
      }));
    });
  }

  // Função de mapeamento para converter string em SkillLevel
  private mapSkillLevel(level: string): SkillLevel {
    const skillLevel = level.replace('SkillLevel.', ''); // Remover o prefixo
    switch (skillLevel) {
      case 'BEGINNER':
        return SkillLevel.BEGINNER;
      case 'INTERMEDIARY':
        return SkillLevel.INTERMEDIARY;
      case 'ADVANCED':
        return SkillLevel.ADVANCED;
      case 'MASTER':
        return SkillLevel.MASTER;
      default:
        throw new Error(`Unknown skill level: ${skillLevel}`);
    }
  }

  protected readonly SkillLevel = SkillLevel;
  protected readonly Introduction = Introduction;
}
