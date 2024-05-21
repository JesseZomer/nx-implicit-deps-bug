import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-unrelated-libary-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unrelated-libary-2.component.html',
  styleUrl: './unrelated-libary-2.component.css',
})
export class UnrelatedLibary2Component {}
