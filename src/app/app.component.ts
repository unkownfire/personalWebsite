import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `CLogo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/CLogo.svg")
    );
    this.matIconRegistry.addSvgIcon(
      'LinkedIn',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/iconfinder_BW_Linkedin_glyph_svg_5305157.svg")
    );
    this.matIconRegistry.addSvgIcon(
      'Github',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/iconfinder_github-social-media_765246.svg")
    );
  }
}
