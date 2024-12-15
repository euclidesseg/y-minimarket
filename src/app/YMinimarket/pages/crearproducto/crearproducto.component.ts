import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-crearproducto',
  standalone: true,
  imports: [],
  templateUrl: `./crearproducto.component.html`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CrearproductoComponent { }
