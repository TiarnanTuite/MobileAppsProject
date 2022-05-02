import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input.component";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [InputComponent],
    imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule, HttpClientModule],
    exports: [InputComponent],
})
export class InputModule {}