import { NgModule } from '@angular/core'

import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component'
import { DropdownDirective } from './directives/dropdown.directive'
import { ClickStopPropagationDirective } from './directives/click-stop-propagation.directive'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations:[
        LoadingSpinnerComponent,
        DropdownDirective,
        ClickStopPropagationDirective,
    ],
    imports:[
        CommonModule
    ],
    exports:[
        LoadingSpinnerComponent,
        DropdownDirective,
        ClickStopPropagationDirective,
        CommonModule
    ]
})
export class SharedModule {}