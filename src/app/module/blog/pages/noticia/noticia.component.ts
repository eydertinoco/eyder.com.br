import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-noticia',
    templateUrl: './noticia.component.html',
    styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

      id:string = '0';
      titulo:string = 'Titulo';
      background:string = 'https://img.cybercook.com.br/receitas/18/pao-de-queijo-12.jpeg';
      autor:string = 'Eyder';
      imagemAutor:string = '../../../assets/img/eu06.jpeg'
      texto:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis rhoncus libero, ' +
        'vitae laoreet mauris vestibulum ut. Proin at aliquam nibh. Fusce facilisis, ipsum at eleifend egestas, ' +
        'magna urna dictum ex, vel ullamcorper diam lacus non purus. Duis eget ligula vel nunc lobortis semper ' +
        'vitae ac metus. Fusce eu pretium sem. Maecenas vitae dapibus eros. Maecenas pretium iaculis ligula, non ' +
        'facilisis lectus. Praesent molestie ex risus, at fringilla ipsum consectetur sit amet. Phasellus et lectus' +
        ' vestibulum arcu commodo egestas et ut elit. Aliquam eu scelerisque sapien, et rhoncus velit. Aliquam ' +
        'hendrerit odio sed quam sodales luctus. Suspendisse tempor vel libero non consectetur. Nullam ac tellus ' +
        'sem. Aliquam non suscipit ante. Duis faucibus leo quis lacus dictum fermentum.';

  constructor(
  ) {}

  ngOnInit(): void {
    let somaTres = 0;
    let somaTotal = 0;
    const x = 500;
    for (let i=1; i<=x; i++) {
      if(i%2 != 0) {
        somaTotal += i;
        if(somaTotal%3 == 0) {
          somaTres += i;
        }
      }
    }
    console.log(somaTres);
  }
}
