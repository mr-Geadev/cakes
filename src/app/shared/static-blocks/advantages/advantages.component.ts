import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
  imports: [ NgIf ],
  standalone: true
})
export class AdvantagesComponent {
  @Input() compactVersion = false;
}
