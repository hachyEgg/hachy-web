import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { TodosModule } from './todos/todos.module';
import { EggStatus } from './todos/status.pipeline';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    LoginModule,
    TodosModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
