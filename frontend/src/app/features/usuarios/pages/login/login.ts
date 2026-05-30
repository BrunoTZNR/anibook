import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth/auth-service';
import { StorageService }from '../../../../core/services/storage/storage';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  login = '';
  senha = '';
  erro = '';

  private authService = inject(AuthService);
  private router = inject(Router);
  private storage = inject(StorageService);
  
  entrar() {

    this.erro = '';

    this.authService
      .login(this.login, this.senha)
      .subscribe({

        next: (response: any) => {
          console.log(response);
          this.storage.setItem('nome_usuario', response.nome);
          this.storage.setItem('id_usuario', response.id);

          this.router.navigate(['/home']);
        },

        error: () => {

          this.erro =
            'Usuário ou senha inválidos';
        }
      }
    );
  }
}