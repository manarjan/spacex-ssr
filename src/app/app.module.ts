import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchFilterComponent } from './components/launch-filter/launch-filter.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchListItemComponent } from './components/launch-list-item/launch-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchFilterComponent,
    LaunchListComponent,
    LaunchListItemComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'launches',
          pathMatch: 'full',
        },
        {
          path: 'launches',
          component: HomeComponent,
        },
      ],
      {
        paramsInheritanceStrategy: 'always',
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
