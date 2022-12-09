import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Imc } from 'src/app/models/Imc';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-alterar-imc',
  templateUrl: './alterar-imc.component.html',
  styleUrls: ['./alterar-imc.component.css'],
})
export class AlterarImcComponent implements OnInit {
  public imc!: Imc;
  
  public constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      let { id } = params;
      if (id !== undefined) {
        this.http
          .get<Imc>('https://localhost:5001/api/imc/buscar/' + id)
          .subscribe((imc) => {
            this.imc = imc;
          });
      }
    });
  }

  alterar() {
    this.http
      .patch<Imc>('https://localhost:5001/api/imc/alterar', this.imc)
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
