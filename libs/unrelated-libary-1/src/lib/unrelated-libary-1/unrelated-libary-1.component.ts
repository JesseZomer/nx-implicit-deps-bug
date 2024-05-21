import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-unrelated-libary-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unrelated-libary-1.component.html',
  styleUrl: './unrelated-libary-1.component.css',
})
export class UnrelatedLibary1Component {}
