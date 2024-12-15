import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {
  public menuItems = routes
  .map(route => route.children ?? [] ) // me obtiene un arreglo de rutas hijas o un arreglo indefinido
  .flat()// Su propósito es aplanar un array de sub-arrays en un solo array. Cuando se llama a flat(), 
        //  elimina un nivel de anidamiento de los arrays, es decir, toma un array que contiene arrays y 
        //  devuelve un nuevo array que contiene todos los elementos de esos sub-arrays.
  .filter(route => route && route.path) // filtrar que si tenga una ruta y que la ruta tenga su direccion
  .filter(route => !route.path?.includes(':') && route.path !== 'login') // dejamos fuera a la ruta que necesita un id
  constructor(private renderer: Renderer2){
    console.log(this.menuItems);
  }


  isDarkMode = false;


  ngOnInit(): void {
    const isDark = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = isDark;
    this.updateDarkMode();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', this.isDarkMode.toString());
    this.updateDarkMode();
  }

  updateDarkMode(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }
}
