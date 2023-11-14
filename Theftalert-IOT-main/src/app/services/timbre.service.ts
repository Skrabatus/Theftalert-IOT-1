import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horario } from '../models/horario-response';

@Injectable({
  providedIn: 'root'
})
export class TimbreService {

  api:string="https://64fe27f6596493f7af7ef4f3.mockapi.io"

  constructor(private http: HttpClient) { }

  getHorario():Observable<Horario[]>{
    return this.http.get<Horario[]>(`${this.api}/Horario`)
  }

  getHorarioId(id:any):Observable<Horario>{
    return this.http.get<Horario>(`${this.api}/Horario/${id}`);
  }
  postHorario(horario:Horario):Observable<Horario>{
    return this.http.post<Horario>(`${this.api}/Horario`, horario);
  }
  putHorario(id:any, horario:any):Observable<Horario>{
    return this.http.put<Horario>(`${this.api}/Horario/${id}`, horario);
  }
  deleteHorario(id:any):Observable<any>{
    return this.http.delete<any>(`${this.api}/Horario/${id}`);
  }

}
