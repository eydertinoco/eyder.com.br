import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'list-certify',
  templateUrl: './list-certify.component.html',
  styleUrls: ['./list-certify.component.scss']
})

export class ListCertifyComponent implements OnInit {

  @Input() certifyUrl: String | undefined;
  @Input() certifyImg: String | undefined;
  @Input() certifyIcon: String | undefined;
  @Input() tecnology: String | undefined;

  constructor() { }
  ngOnInit(): void {

  }
}
