import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from "./components/template/footer/footer.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent, MatToolbarModule, FooterComponent]
})
export class AppComponent { }
