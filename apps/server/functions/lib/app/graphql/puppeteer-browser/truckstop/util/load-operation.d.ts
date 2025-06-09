import { ILoad } from "../listener/interface/load.interface";
export declare type state = 'alabama' | 'mississippi' | 'north-carolina' | 'georgia' | 'oklahoma' | 'new-hampshire' | 'new-york' | 'south-carolina' | 'texas' | 'kansas' | 'missouri' | 'virginia' | 'tennesse' | 'kentucky' | 'west-virginia' | 'pennsylvania' | 'delaware' | 'maryland' | 'louisiana' | 'florida';
export declare class LoadOperations {
    static isWorkingStates(loads: ILoad[]): boolean;
    static isWorkingState(stateAbbr: string): boolean;
    static getState(loadState: string): state;
    static filterWorkingStateLoads(loads: ILoad[]): ILoad[];
    static getDBKeys(load: ILoad): {
        originState: state;
        originCity: string;
        destinationState: state;
        destinationCity: string;
    };
}
