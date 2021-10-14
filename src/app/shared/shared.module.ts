import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCheckboxComponent } from './components/filter-checkbox/filter-checkbox.component';

@NgModule({
  declarations: [FilterCheckboxComponent],
  imports: [CommonModule],
  exports:[FilterCheckboxComponent]
})
export class SharedModule {}
