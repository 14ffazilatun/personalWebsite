import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./side-bar/side-bar/side-bar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProjectPageComponent } from "./project-page/project-page.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, SideBarComponent, HomePageComponent, ProjectPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'fida-angular-project';
  currentPage="homePage"; 
  setCurrentPage($event: any) {
    console.log("Message From Child",$event)
    this.currentPage = $event
  }
}
