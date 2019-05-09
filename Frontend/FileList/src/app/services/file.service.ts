import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FileService {
	private apiUrl = 'http://localhost:3000/';
	private filesUrl = this.apiUrl+'file/getfiles'; 
	private downloadFileUrl = this.apiUrl+'file/downloadfile'; 

	constructor(
	private http: HttpClient) { }
   
	//get the files from the server
	getFiles (): Observable<any>{
		return this.http.get(this.filesUrl)
		.pipe(
			tap(_ => console.log('fetched files')),
			catchError(this.handleError<any>('getFiles', []))
		);
	}
	
	downloadFile (file : string) : Observable<any> {
		var body = {filename : file};
		
		return this.http.post(this.downloadFileUrl,body,{
		responseType : 'blob',
		headers: new HttpHeaders().append('Content-Type', 'application/json')
		})
		.pipe(
			tap(_ => console.log('Successfully download')),
			catchError(this.handleError<any>('getFile', []))
		);
	}
	
	private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
     // this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
