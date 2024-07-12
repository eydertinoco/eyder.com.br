import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SkillLevel} from "../shared/enums/skill-level.enum";

interface Tecnology {
  tecnologyName: string;
  mySkillLevel: SkillLevel;
  tecnologyImg: string;
}

@Injectable({
  providedIn: 'root'
})
export class TecnologyService {
  private jsonURL = 'assets/_files/tecnology.json';

  constructor(private http: HttpClient) { }

  getTecnologies(): Observable<Tecnology[]> {
    return this.http.get<Tecnology[]>(this.jsonURL);
  }
}
