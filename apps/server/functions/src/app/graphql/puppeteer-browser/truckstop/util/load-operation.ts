import { ILoad } from "../listener/interface/load.interface";

export type state = 'alabama' | 'mississippi' | 'north-carolina' | 'georgia' | 'oklahoma' | 'new-hampshire' | 'new-york' | 'south-carolina' | 'texas' | 'kansas' | 'missouri' |
  'virginia' | 'tennesse' | 'kentucky' | 'west-virginia' | 'pennsylvania' | 'delaware' | 'maryland' | 'louisiana' | 'florida';
const workingStates: string[] = ['alabama', 'mississippi', 'north-carolina', 'georgia', 'oklahoma', 'new-hampshire', 'new-york', 'south-carolina', 'texas', 'kansas', 'missouri',
  'virginia', 'tennesse', 'kentucky', 'west-virginia', 'pennsylvania', 'delaware', 'maryland', 'louisiana', 'florida'];
const stateCode: Record<string, state> = {
  'AL': 'alabama',
  'DE': 'delaware',
  'FL': 'florida',
  'GA': 'georgia',
  'KS': 'kansas',
  'KY': 'kentucky',
  'LA': 'louisiana',
  'MD': 'maryland',
  'MO': 'missouri',
  'MS': 'mississippi',
  'NC': 'north-carolina',
  'NH': 'new-hampshire',
  'NY': 'new-york',
  'OK': 'oklahoma',
  'PA': 'pennsylvania',
  'SC': 'south-carolina',
  'TN': 'tennesse',
  'TX': 'texas',
  'VA': 'virginia',
  'WV': 'west-virginia'
};

export class LoadOperations {


  static isWorkingStates(loads: ILoad[]) {
    const loadState = loads[0].originState;
    return workingStates.includes(stateCode[loadState]);
  }

  static isWorkingState(stateAbbr: string) {
    return workingStates.includes(stateCode[stateAbbr]);
  }

  static getState(loadState: string) {
    return stateCode[loadState];
  }

  static filterWorkingStateLoads(loads: ILoad[]) {
    return loads.filter(load => ((workingStates.includes(stateCode[load.originState]) && (workingStates.includes(stateCode[load.destinationState])))));
  }

  static getDBKeys(load: ILoad) {
    const originState = LoadOperations.getState(load.originState);
    const originCity = load.originCity.replace(/\s/g, '-').toLowerCase();
    const destinationState = LoadOperations.getState(load.destinationState);
    const destinationCity = load.destinationCity.replace(/\s/g, '-').toLowerCase();
    return { originState, originCity, destinationState, destinationCity };
  }
}