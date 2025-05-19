import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarCheck, faMoneyBillWave, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NgModule } from '@angular/core';

// Add icons to library
library.add(faCalendarCheck, faMoneyBillWave, faRobot, faFacebook, faTwitter, faInstagram, faLinkedin);

@NgModule({
  imports: [
    FontAwesomeModule
  ]
})