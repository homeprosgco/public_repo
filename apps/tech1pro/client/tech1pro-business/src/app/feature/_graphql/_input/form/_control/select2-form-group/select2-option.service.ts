import { Injectable } from '@angular/core';
import { Select2Option } from './_type/select2-option.type';
import { jobLeadStatus, status } from './status-options/status-options';
import { sortStrings } from 'src/app/_lib/util/util';

@Injectable({
  providedIn: 'root'
})
export class Select2OptionService {

  constructor() { }

  getStatusOptions(key: status): Select2Option[] {
    let options: Select2Option[] = [];

    switch (key) {
      case 'job-leads':
        options = this.jobLeadStatusSelectOptions;
        break;
      case 'job-lead-source':
        options = this.jobLeadSourcesSelectOptions;
        break
      case 'work-categories':
        options = this.workCategoryOptions;
        break
      default:
        break;
    }
    return options;
  }

  get jobLeadStatusSelectOptions(): Select2Option[] {
    return this.#mapStatuses(this.jobLeadStatuses, 'new');
  }

  get jobLeadSourcesSelectOptions(): Select2Option[] {
    return this.#mapStatuses(this.jobLeadSources, 'none');
  }

  get workCategoryOptions() {
    return this.#mapStatuses(this.workCategories, 'none');
  }

  get jobLeadStatuses() {
    return sortStrings(jobLeadStatus);
  }

  get jobLeadSources() {
    return sortStrings(['none', 'craigslist', 'billboard', 'direct mail', 'facebook', 'instagram', 'yelp', 'referral', 'linked in', 'in-house account']);
  }

  get workCategories() {
    return sortStrings(['plumbing', 'electrical', 'concrete', 'power washing', 'painting', 'windows & doors', 'hvac', 'flooring', 'tile installation', 'laminate installation', 'carpet installation'])
  }

  #mapStatuses(statusArray: string[], selected: string) {
    return statusArray.map(status => {
      let option = { id: status, text: status.toUpperCase() } as Select2Option;
      if (status === selected) {
        option.selected = true;
      }
      return option;
    })
  }


}
