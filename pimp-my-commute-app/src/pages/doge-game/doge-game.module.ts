import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DogeGamePage } from './doge-game';

@NgModule({
  declarations: [
    DogeGamePage,
  ],
  imports: [
    IonicPageModule.forChild(DogeGamePage),
  ],
})
export class DogeGamePageModule {}
