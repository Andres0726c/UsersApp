import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { switchMap } from "rxjs/operators";
import { Usuario } from '../../interfaces/usuarios.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  usuario!: Usuario;

  constructor(private activatedRoute: ActivatedRoute,
              private usuariosService: UsuariosService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.usuariosService.getUsuarioPorId(id) )
        )
        .subscribe( usuario => this.usuario = usuario );

  }

  regresar() {
    this.router.navigate(['/usuarios/listado'])
  }

}
