import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  
  constructor(private http:HttpClient) { }
  getVideo(id : string): Observable<any>{
    return this.http.get(`https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyCxjBz4onxTAgdYGC_k0iJexe5VnwJX1fI&part=contentDetails&part=snippet&part=player&id=${id}`)
  }
  getSubtitle(id: string):Observable<any>{
    return this.http.get(`https://www.googleapis.com/youtube/v3/captions?key=AIzaSyCxjBz4onxTAgdYGC_k0iJexe5VnwJX1fI&part=snippet&videoId=${id}`)
  }
  
}
