import {Component} from '@angular/core';


@Component({
    selector: 'menu',
    template: 
   ` <div class="window">

      <!-- .toolbar-header sits at the top of your app -->
      <header class="toolbar toolbar-header">
        <h1 class="title">Photon</h1>
      </header>

      <!-- Your app's content goes inside .window-content -->
      <div class="window-content">
        <div class="pane-group">
          <div class="pane pane-sm sidebar">
            <nav class="nav-group">
              <h5 class="nav-group-title">Favorites</h5>
              <span class="nav-group-item">
                <span class="icon icon-home"></span>
                connors
              </span>
              <span class="nav-group-item active">
                <span class="icon icon-light-up"></span>
                Photon
              </span>
              <span class="nav-group-item">
                <span class="icon icon-download"></span>
                Downloads
              </span>
              <span class="nav-group-item">
                <span class="icon icon-folder"></span>
                Documents
              </span>
              <span class="nav-group-item">
                <span class="icon icon-window"></span>
                Applications
              </span>
              <span class="nav-group-item">
                <span class="icon icon-signal"></span>
                AirDrop
              </span>
              <span class="nav-group-item">
                <span class="icon icon-monitor"></span>
                Desktop
              </span>
            </nav>
          </div>

        </div>
      </div>
    </div>
     `

})

export class AppComponent {
    message = 'Hello';
}

