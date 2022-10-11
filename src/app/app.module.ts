import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { ConfigService } from './app.service';
// import { CustomMaterialModule } from './scc/material.module';

// import {
//   MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
//   MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule
// } from '@angular/material';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from './app.service';
// import { Logger } from './app.logger';

// import {MatFormFieldControl} from '@angular/material/formfield';
// import { MatFormFieldControl } from "@angular/material/form-field";
// import {MatProgressSpinnerModule} from '@angular/material/progress';


@NgModule({
  imports: [ BrowserModule, FormsModule, MatButtonModule,
            MatCardModule,
            MatDialogModule, 
            MatInputModule, MatTableModule,
            MatToolbarModule, MatMenuModule,MatIconModule, 
            CommonModule,
            BrowserAnimationsModule,
            HttpClientModule,
            ReactiveFormsModule,
            MatCheckboxModule,
            //  MatProgressSpinnerModule
            // MatFormFieldControl,
  
            ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ApiServices ]
  
})
export class AppModule { }
