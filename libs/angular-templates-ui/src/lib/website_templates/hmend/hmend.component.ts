import { Component } from '@angular/core';
import { HomeFourComponent } from './home_four/home_four.component';
import { SliderAreaComponent } from './slider_area/slider_area.component';
import { OurServicesAreaComponent } from './our_services_area/our_services_area.component';
import { HomeServiceAreaComponent } from './home_service_area/home_service_area.component';
import { OurServiceAreaComponent } from './our_service_area/our_service_area.component';
import { Testimonial1AreaComponent } from './testimonial_1_area/testimonial_1_area.component';
import { TestimonialAreaComponent } from './testimonial_area/testimonial_area.component';
import { PortfolioAreaComponent } from './portfolio_area/portfolio_area.component';
import { Contact2AreaComponent } from './contact_2_area/contact_2_area.component';
import { BlogAreaComponent } from './blog_area/blog_area.component';
import { HmendFooterComponent } from './hmend_footer/hmend_footer.component';
import { HmendAComponent } from './hmend_a/hmend_a.component';

@Component({
  selector: 'sg-hmend',
  templateUrl: './hmend.component.html',
  standalone: true,
  imports: [HomeFourComponent, SliderAreaComponent, OurServicesAreaComponent, HomeServiceAreaComponent, OurServiceAreaComponent, Testimonial1AreaComponent, TestimonialAreaComponent, PortfolioAreaComponent, Contact2AreaComponent, BlogAreaComponent, HmendFooterComponent, HmendAComponent]
})
export class HmendComponent {}
