import { Usuario } from 'src/app/models/Usuario';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imc } from 'src/app/models/Imc';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-imc',
  templateUrl: './cadastrar-imc.component.html',
  styleUrls: ['./cadastrar-imc.component.css'],
})
export class CadastrarImcComponent implements OnInit {
  id?: string;
  peso!: number;
  altura!: number;
  resultadoImc?: number;
  categoria!: string;
  usuarios!: Usuario[];
  usuarioId!: number;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.http
      .get<Usuario[]>('https://localhost:5001/api/usuario/listar')
      .subscribe((usuarios) => {
        this.usuarios = usuarios;
      });
  }

  cadastrar(): void {
    let imc: Imc = {
      peso: this.peso,
      altura: this.altura,
      usuarioId: this.usuarioId,
    };

    this.http
      .post<Imc>('https://localhost:5001/api/imc/cadastrar', imc)
      .subscribe({
        next: (imc) => {
          this._snackBar.open('Cadastro realizado!', 'Ok!', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          this.router.navigate(['pages/imc/listar']);
        },
      });
  }

  alterar(): void {
    let imc: Imc = {
      peso: this.peso,
      altura: this.altura,
    };

    this.http
      .patch<Imc>('https://localhost:5001/api/imc/alterar', imc)
      .subscribe({
        next: (imc) => {
          this._snackBar.open('Imc alterado!', 'Ok!', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          this.router.navigate(['pages/imc/listar']);
        },
      });
  }
}
