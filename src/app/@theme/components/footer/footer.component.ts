import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="https://bianca.antoci.com" target="_blank">Bianca Antoci</a></b> 2020</span>
    <div class="socials">
      <a href="https://github.com/bianca-antoci" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/bianca.antoci/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://www.linkedin.com/in/bianca-antoci-61243619a/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
