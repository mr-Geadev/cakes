import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { SvgIconComponent } from 'src/app/shared/components/svg-icon/svg-icon.component';
import { generateUid } from 'src/app/shared/utils/generateUid';

@Component({
  standalone: true,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, SvgIconComponent],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;

  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() label: string = '';

  protected readonly Validators = Validators;

  constructor() {}

  ngOnInit() {
    if (!this.id) {
      this.id = generateUid();
    }
  }
}
