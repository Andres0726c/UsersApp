import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario, Datum } from '../../interfaces/usuarios.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  usuarios!: Usuario;
  datos!: Datum;

  constructor( private usuariosService: UsuariosService,
               private router: Router ) { }

  ngOnInit(): void {

    this.loadData();
  }

  loadData() :void {
    this.usuariosService.getUsuarios()
        .subscribe( usuarios => {
          this.usuarios = usuarios
          console.log(this.usuarios);
        })

  }

  ver(){
    this.router.navigate(['/usuarios/listado'])
  }

}
