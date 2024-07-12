import { Component, OnInit } from '@angular/core';
import noticias from "../../../../../assets/_files/noticias.json";
import {ActivatedRoute} from "@angular/router";
import noticia from "../../../../../assets/_files/noticias.json";

@Component({
    selector: 'app-noticia',
    templateUrl: './noticia.component.html',
    styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  noticia: {
    id: string,
    titulo: string,
    imagem: string,
    autor: string,
    foto: string,
    data: string,
    hora: string,
    texto: string,
  } [] = noticias;

  noticiaID: number | undefined;
  titulo: string | undefined;
  imagem: string | undefined;
  autor: string | undefined;
  foto: string | undefined;
  data: string | undefined;
  hora: string | undefined;
  texto: string | undefined;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.noticiaID = parseInt(this.route.snapshot.params["id"]);
    this.titulo = noticia[this.noticiaID].titulo;
    this.imagem = noticia[this.noticiaID].imagem;
    this.autor = noticia[this.noticiaID].autor;
    this.foto = noticia[this.noticiaID].foto;
    this.data = noticia[this.noticiaID].data;
    this.hora = noticia[this.noticiaID].hora;
    this.texto = noticia[this.noticiaID].texto;
  }
}
