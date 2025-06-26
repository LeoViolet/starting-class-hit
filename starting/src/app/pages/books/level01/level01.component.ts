import { Component } from '@angular/core';
import { ControlStructuresComponent } from "./control-structures/control-structures.component";
import { OperatorsComponent } from "./operators/operators.component";
import { DependencyInjectionComponent } from "./dependency-injection/dependency-injection.component";

@Component({
  selector: 'app-level01',
  imports: [ControlStructuresComponent, OperatorsComponent, DependencyInjectionComponent],
  templateUrl: './level01.component.html',
  styleUrl: './level01.component.css'
})
export class Level01Component {

}
