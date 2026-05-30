import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../core/services/usuario/usuario-service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html'
})
export class ListaComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.listar()
      .subscribe(data => {
        this.usuarios = data;
      });
  }
}