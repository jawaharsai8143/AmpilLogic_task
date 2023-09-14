import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  buttonDisabled: boolean | undefined;
  disableProgressbar: boolean | undefined;
  disableSuccessMsg: boolean | undefined;
  disableFotter:boolean|undefined;
  ngOnInit() {
    this.buttonDisabled = true;
    this.disableProgressbar = false;
    this.disableSuccessMsg = false;
    this.disableFotter=true;
  }

  startProgress() {
    this.disableProgressbar = true;
    this.startProgressBar();
    this.disableFotter=false;
  }
  progress = 0;
  showSuccessPopup = false;

  startProgressBar() {
    this.progress = 0;
    this.showSuccessPopup = false;
    this.buttonDisabled = false;
    

    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 20; // Adjust the increment as needed
      } else {
        clearInterval(interval);
        this.showSuccessPopup = true;
        this.closeSuccessPopup();
      }
    }, 500); // Adjust the interval as needed
  }

  closeSuccessPopup() {
    this.disableProgressbar = false;
    this.buttonDisabled = false;
    this.disableSuccessMsg = true;
    this.disableFotter=true;
  }

}
