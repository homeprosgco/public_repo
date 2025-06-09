export interface ILoad {
  id: string;
  loadStateId: number;
  phone: string;
  legacyLoadId: number;
  modeId: number;
  modeCode: number;
  originState: string;
  originCity: string;
  originCityState: string;
  originEarlyTime: string;
  originLateTime: string;
  originDeadhead: number | null;
  destinationState: string;
  destinationCity: string;
  destinationCityState: string;
  destinationDeadhead: string | null;
  tripDistance: number;
  dimensionsLength: number;
  dimensionsWeight: number;
  equipmentCode: string;
  postedRate: number | null;
  createdOn: string;
  updatedOn: string;
  isBookItNow: boolean;
  loadTrackingRequired: boolean;
  canBookItNow: boolean;
  allInRate: number | null;
  rpm: number | null;
  accountName: string;
  experienceFactor: string;
  daysToPay: number;
  bondTypeId: number;
  payEnabled: boolean;
  daysToPayInteger: number;
  equipmentOptions: string[],
  __typename: string;
  timestamp?: string;
}