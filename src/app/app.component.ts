import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
//[] means property binding - one way up C to D
// () means event binding - D to C

  name = 'Angular'; 


}
