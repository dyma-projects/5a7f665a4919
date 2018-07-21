import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  colorParagraphe : string = 'darkorchid';
  username : string ="Jo";

  constructor() { }

  ngOnInit() {
  }

  clickSurBouton()
  {
    console.log("On a cliqué sur le bouton !")
  }

}
