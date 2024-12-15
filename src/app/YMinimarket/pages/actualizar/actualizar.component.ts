import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ActualizarComponent { }
