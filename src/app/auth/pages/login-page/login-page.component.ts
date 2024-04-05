import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
    `
      .image-container {
        display: flex;
        justify-content: center;
      }

      .logo-image {
        width: 250px;
        height: auto;
      }
    `,
  ],
})
export class LoginPageComponent {}
