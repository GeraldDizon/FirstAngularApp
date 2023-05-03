import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'My First Angular App';
  description: string = 'First Try';

  toggleAddTask() {
    console.log('Add');
  }
}
