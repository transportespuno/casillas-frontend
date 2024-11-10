import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavComponent } from './component/web/nav/nav.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'casillas';
}
