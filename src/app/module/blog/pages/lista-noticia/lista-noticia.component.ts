import { Component, OnInit } from '@angular/core';

import noticias from '../../../../../assets/_files/noticias.json';
import noticiasList from "../../../../../assets/_files/noticias.json";

@Component({
    selector: 'lista-noticia',
    templateUrl: './lista-noticia.component.html',
    styleUrls: ['./lista-noticia.component.scss'],
})
export class ListaNoticiaComponent implements OnInit {

  noticiasList: {
    id: string,
    titulo: string,
    imagem: string,
    autor: string,
    foto: string,
    data: string,
    hora: string,
    texto: string,
  } [] = noticias;

  constructor(
  ) {}

  ngOnInit(): void {

  }
}
