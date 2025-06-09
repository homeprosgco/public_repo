import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Select2Option } from './_type/select2-option.type';

@Directive({
  selector: '[appSelect2]'
})
export class Select2Directive implements OnChanges, OnInit {

  @Output() data: EventEmitter<any> = new EventEmitter();
  @Input() appSelect2: Select2Option[] = [];

  constructor(private el: ElementRef) { }

  get nativeElement() {
    return $(this.el.nativeElement);
  }

  ngOnInit(): void {
    this.onSelect();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.nativeElement.select2({
      minimumResultsForSearch: Infinity,
      data: [{ id: 'default_value', text: 'Choose an option', selected: true, disabled: true }, ...changes["appSelect2"].currentValue,]
    })
  }

  #triggerChange() {
    this.nativeElement.trigger('change');
  }

  setValue(optionId: string) {
    this.nativeElement.val(optionId);
    this.#triggerChange();
  }

  clear() {
    this.nativeElement.val(null);
    this.#triggerChange();
  }

  onSelect() {
    this.nativeElement.on('select2:select', this.dispatchSelection.bind(this));
  }

  dispatchSelection(e: any) {
    console.log(e.params.data);
    this.data.emit(e.params.data);
  }

  unbind() {
    this.nativeElement.off('select2:select');
  }

}
