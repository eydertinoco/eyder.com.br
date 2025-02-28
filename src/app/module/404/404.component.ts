import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss']
})

export class PageNotFoundComponent implements OnInit {

    constructor(
      private translate: TranslateService
    ) { }


    ngOnInit(): void {
    }
}
