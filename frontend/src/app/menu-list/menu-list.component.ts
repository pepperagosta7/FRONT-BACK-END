import { Component } from '@angular/core';
import { MenuService, Piatto } from '../menu.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})

export class MenuListComponent {
  piatti: Piatto[] = [];
  newPiatto: Piatto = { name: '', description: '', price: 0 };

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadPiatti();
  }

  loadPiatti(): void {
    this.menuService.getPiatti().subscribe(piatti => {
      this.piatti = piatti;
    });
  }

  addPiatto(): void {
    this.menuService.addPiatto(this.newPiatto).subscribe(piatto => {
      this.piatti.push(piatto);
      this.newPiatto = { name: '', description: '', price: 0}; // Resetta il form
    });
  }


rimuoviPiatto(id: number) {
  this.menuService.removePiatto(id).subscribe({
    next: () => {
      this.loadPiatti(); 
    },
  });
}


}
