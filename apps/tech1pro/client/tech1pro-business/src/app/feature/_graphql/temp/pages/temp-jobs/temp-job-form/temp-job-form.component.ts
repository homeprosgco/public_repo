import { Component, OnInit } from '@angular/core';

type JobFormViewState = 'personal details' | 'address' | 'requested scope' | 'uploads';

@Component({
  selector: 'app-temp-job-form',
  templateUrl: './temp-job-form.component.html',
})
export class TempJobFormComponent implements OnInit {

  formViewStates: JobFormViewState[] = ['personal details', 'address', 'requested scope', 'uploads'];
  currentFormState!: JobFormViewState;
  currentFormStateIndex!: number;
  isUpdating!: boolean;
  previousBtnText!: string;
  nextBtnText!: string;

  constructor() { }

  ngOnInit() {
    this.isUpdating = false;
    this.currentFormState = 'personal details';
    this.currentFormStateIndex = 0;
    this.previousBtnText = '';
    this.nextBtnText = this.#getButtonText(this.currentFormStateIndex + 1)
  }

  #updateFormState() {
    this.currentFormState = this.formViewStates[this.currentFormStateIndex];
    this.#updateFormBtnsText();
  }

  #updateFormBtnsText() {
    if(this.currentFormStateIndex !== 0) {
      this.previousBtnText = this.#getButtonText(this.currentFormStateIndex - 1);
    }
    if(this.currentFormStateIndex ! === this.formViewStates.length) {
      this.nextBtnText = this.#getButtonText(this.currentFormStateIndex);
    }
  }

  onNextBtnPressed() {
    this.currentFormStateIndex++;
    this.#updateFormState();
    console.log(this.currentFormStateIndex);
  }

  onPreviousBtnPressed() {
    this.currentFormStateIndex--;
    this.#updateFormState();
  }

  #getButtonText(index:number) {
    return this.formViewStates[this.currentFormStateIndex][index].toUpperCase() + this.formViewStates[this.currentFormStateIndex].slice(1)
  }

}
