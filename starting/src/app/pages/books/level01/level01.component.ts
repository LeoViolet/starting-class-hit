import { Component } from '@angular/core';
import { ControlStructuresComponent } from "./control-structures/control-structures.component";
import { OperatorsComponent } from "./operators/operators.component";
import { DependencyInjectionComponent } from "./dependency-injection/dependency-injection.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-level01',
  imports: [ControlStructuresComponent, OperatorsComponent, DependencyInjectionComponent, RouterModule],
  templateUrl: './level01.component.html',
  styleUrl: './../../angular/angular.component.css'
})
export class Level01Component {

}
