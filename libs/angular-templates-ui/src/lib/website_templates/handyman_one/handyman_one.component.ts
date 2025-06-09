import { Component } from '@angular/core';
import { PageLoaderComponent } from './page_loader/page_loader.component';
import { HeaderComponent } from './header/header.component';
import { SectionOneComponent } from './section_one/section_one.component';
import { SectionTwoComponent } from './section_two/section_two.component';
import { SectionThreeComponent } from './section_three/section_three.component';
import { ViewBtnSecComponent } from './view_btn_sec/view_btn_sec.component';
import { SectionFourComponent } from './section_four/section_four.component';
import { SectionFiveComponent } from './section_five/section_five.component';
import { SectionSixComponent } from './section_six/section_six.component';
import { SectionSevenComponent } from './section_seven/section_seven.component';
import { SectionEightComponent } from './section_eight/section_eight.component';
import { CurvedSectionComponent } from './curved_section/curved_section.component';
import { BlogSectionComponent } from './blog_section/blog_section.component';
import { InstallationSectionComponent } from './installation_section/installation_section.component';
import { ScheduleserviceComponent } from './scheduleservice/scheduleservice.component';
import { HandymanFooterComponent } from './handyman_footer/handyman_footer.component';
import { CopyrightMainComponent } from './copyright_main/copyright_main.component';
import { BottomTopButtonComponent } from './bottom_top_button/bottom_top_button.component';

@Component({
  selector: 'app-handyman_one',
  templateUrl: './handyman_one.component.html',
  standalone: true,
  imports: [PageLoaderComponent, HeaderComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, ViewBtnSecComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, SectionSevenComponent, SectionEightComponent, CurvedSectionComponent, BlogSectionComponent, InstallationSectionComponent, ScheduleserviceComponent, HandymanFooterComponent, CopyrightMainComponent, BottomTopButtonComponent]
})
export class HandymanOneComponent {}
