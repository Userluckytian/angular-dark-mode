import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dark-mode';
  themeNameBtn: string | null = 'light';

  changeTheme() {
    const body = document.getElementsByTagName('body')[0]; // 获取dom
    const theme = body.getAttribute('app-theme-style'); // 获取属性名
    if (theme === 'light') {
      this.themeNameBtn = theme; // 这是themeNameBtn是为了在页面上展示
      body.setAttribute('app-theme-style', 'dark'); // 设置新的属性名
    } else {
      this.themeNameBtn = theme;
      body.setAttribute('app-theme-style', 'light');
    }
  }
  // 打印

}
