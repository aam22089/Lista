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
    id: number; name: string;
  }[] = [];
  nextId: number = 1;
  constructor(public navCtrl: NavController) {

  }

  addItem(name: string): void {
    if (name.trim()) {
      this.items.push({
        id: this.nextId++,
        name: name.trim(),
      });
    }
    else {
      console.error('El nombre y la fecha no pueden estar vacíos');
    }
  }

  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}
