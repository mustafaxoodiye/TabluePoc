import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as Tableau from 'tableau-api-js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.initViz();
  }

  public initViz(): void {
    const containerDiv: any = document.getElementById('tableauContainer');
    const vizUrl = 'https://public.tableau.com/views/WorldIndicators/GDPpercapita';
    const options = {
      width: containerDiv.offsetWidth,
      height: 700
    };

    const viz = new Tableau.Viz(containerDiv, vizUrl, options);
  }

}
