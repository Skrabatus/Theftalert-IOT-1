import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Twilio } from '../models/twilio-response';

@Injectable({
  providedIn: 'root'
})
export class TwilioEsp32Service {
 api:string="https://64fe27f6596493f7af7ef4f3.mockapi.io";

 constructor(

   private http:HttpClient
 ) { }

 getTwilioEsp32():Observable<Twilio[]>{
  return this.http.get<Twilio[]>(`${this.api}/twilio`);
 }
 getTwilioEsp32ById(id:any):Observable<Twilio>{
  return this.http.get<Twilio>(`${this.api}/twilio/${id}`);
 }
 postTwilioEsp32(twilio:Twilio):Observable<Twilio>{
  return this.http.post<Twilio>(`${this.api}/twilio/`, twilio);
 }
 putTwilioEsp32(id:any, twilio:Twilio):Observable<Twilio>{
  return this.http.put<Twilio>(`${this.api}/twilio/${id}`, twilio);
 }
 DeletedTwilioEsp32(id:any):Observable<any>{
  return this.http.delete<any>(`${this.api}/twilio/${id}`);
 }


}
