import { Component } from '@angular/core';
import { CommonApiService } from '../../services/common.api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isSidebarVisible = true;
  constructor(private sidebarService: CommonApiService) { }


  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
  }


}
