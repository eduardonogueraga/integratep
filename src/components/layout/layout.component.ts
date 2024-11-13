import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RouterOutlet,RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent,AboutComponent, HomepageComponent, RouterOutlet, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
