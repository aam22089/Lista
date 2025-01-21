import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  items: {
    id: number; name: string; date: string,
    completed: boolean
  }[] = [];
  nextId: number = 1;
  constructor(public navCtrl: NavController) {

  }

  addItem(name: string, date: string): void {
    if (name.trim() && date.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
        date: date.trim(),
        completed: false,
      });
    }
    else {
      console.error('El nombre y la fecha no pueden estar vacíos');
    }
  }
}
