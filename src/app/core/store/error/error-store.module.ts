import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { errorReducer } from './error.reducer';
import { ErrorEffects } from './error.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('error', errorReducer),
    EffectsModule.forFeature([ErrorEffects]),
  ],
})
export class ErrorStoreModule {}
