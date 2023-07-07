import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public loginModalVisible: boolean = false;

  public showLoginModal(): void {
    this.loginModalVisible = true;
  }

  public hideLoginModal(): void {
    this.loginModalVisible = false;
  }
}
