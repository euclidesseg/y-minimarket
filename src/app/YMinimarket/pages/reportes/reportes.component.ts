import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [],
  template: `<p>reportes works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReportesComponent { }
