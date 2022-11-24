import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Usuario } from '../login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: any = new Object;
  token = ''
  constructor(private router: Router, private loginService: LoginService) { 

  }

  _user: Usuario = {
    "establishment": 1,
    "password": "ff124672-3184-49a7-9441-3b70d9f370ff"
  }

  ngOnInit(): void {
    this.usuario = {
      nome: 'mercado1',
      senha: 'senha123'
    }
  }

  entrar(){
    if(this.usuario.nome == 'mercado1'){
      if(this.usuario.senha == 'senha123'){
        this.loginService.entrar(this._user).subscribe( (res) => {
          if(res.token){
            this.token = res.token
            localStorage.setItem("token", this.token)
            this.router.navigate(['/dashboard'])
          }
        })

      }else{
        Swal.fire({
          title: 'Erro!',
          text: 'Senha invalida',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }else{
      Swal.fire({
        title: 'Erro!',
        text: 'Usuario não existe',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
     }
  }

}
