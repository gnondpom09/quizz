import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzRoutingModule } from './quizz-routing.module';
import { QuizzComponent } from './quizz.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [QuizzComponent],
  imports: [CommonModule, QuizzRoutingModule, ComponentsModule],
})
export class QuizzModule {}
