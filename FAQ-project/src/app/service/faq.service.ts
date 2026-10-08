import { inject, Injectable, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { QAndA } from '../faq.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class FaqService {
   private apiUrl='http://localhost:3000/data';
   private http =inject(HttpClient);

    addQAndA(qa:QAndA):Observable<QAndA>{
      return this.http.post<QAndA>(this.apiUrl,qa);
    }
    getQAndA():Observable<QAndA[]>{
    return this.http.get<QAndA[]>(this.apiUrl);
    }
    deleteQAndA(id:any):Observable<QAndA>{
        return this.http.delete<QAndA>(`${this.apiUrl}/${id}`);
     }
     updateQAndA(id:any,qa:QAndA):Observable<QAndA>{
        return this.http.put<QAndA>(`${this.apiUrl}/${id}`,qa)
     }
     getQAndAById(id:any):Observable<QAndA>{
        return this.http.get<QAndA>(`${this.apiUrl}/${id}`)
     }
}
