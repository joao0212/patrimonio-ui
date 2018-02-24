import { ItemCadastroService } from '../item-cadastro/item-cadastro.service';

import { FormControl } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];
  constructor(private itemCadastroService: ItemCadastroService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.itemCadastroService.listar().subscribe(itens => {
      this.itens = itens;
    });
  }

  adicionar(frm: FormControl) {
    this.itemCadastroService.adicionar(frm.value).subscribe(() => {
      frm.reset();
      this.listar();
    });
  }

}
