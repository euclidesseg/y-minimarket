import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [],
  templateUrl: `./inventario.component.html`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InventarioComponent { }
