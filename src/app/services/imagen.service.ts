import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http: HttpClient) { 

  }

  //Metodos para el envio del mensaje de Error
  setError(mensaje: string){
    this.error$.next(mensaje);
  }
  getError():Observable<string>{
   return this.error$.asObservable();

  }
  //______________________________________________


  //Metodos para el envío de la palabra de busqueda
  setTerminoBusqueda(termino: string){
    this.terminoBusqueda$.next(termino)
  }
  getTerminoBusqueda():Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }

  //______________________________________________

  //Metodo para el envío de la imagen

  getImagenes(termino: string, imagenPorPagina: number, paginaActual: number  ): Observable<any> {
    const KEY = '43752364-c959e8a4674ce73b818fd4409';
    const URL = 'https://pixabay.com/api/?key='+ KEY +'&q='+ termino +
               '&per_page' + imagenPorPagina + '&page' + paginaActual ;
    return this.http.get(URL);
  }
}
