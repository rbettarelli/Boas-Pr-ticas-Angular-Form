import { Observable } from 'rxjs/internal/Observable';
import { AutenticacaoComponent } from './../../autenticacao/autenticacao.component';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario =''
  senha =''


  constructor(private authService: AutenticacaoService, private route: Router) { }

  ngOnInit(): void {

  }

  login() {

    this.authService.autenticar(this.usuario, this.senha).subscribe(()=> {
      this.route.navigate(['animais'])
    }, (error) => {
      alert('usuario ou senha invalidos')
      console.log(error)

    }

    )}

  }


