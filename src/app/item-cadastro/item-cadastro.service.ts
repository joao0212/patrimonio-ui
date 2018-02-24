import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemCadastroService {

  itemCadastroUrl = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.itemCadastroUrl);
  }

  adicionar(item: any) {
    return this.http.post(this.itemCadastroUrl, item);
  }
}
