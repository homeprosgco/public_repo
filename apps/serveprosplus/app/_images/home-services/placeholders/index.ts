import { ServiceCategory } from "@prisma/client";
import countertop_installation from './countertop_installation.jpg';
import air_conditioning from './air_conditioning.jpg';
import cabinetry from './cabinetry.jpeg';
import carpentry from './carpentry.jpeg';
import carpet_installation from './carpet_installation.jpeg';
import concrete from './concrete.jpeg';
import damage_restoration from './damage_restoration.jpeg';
import decks_and_railings from './decks_and_railings.jpeg';
import demoolition from './demolition.jpeg';
import drywall from './drywall.jpeg';
import electrical from './electrical.jpeg';
import excavation from './excavation.jpeg';
import fences_and_gates from './fences_and_gates.jpeg';
import flooring from './flooring.jpeg';
import garage_door_services from './garage_door_services.jpeg';
import garbage_removal from './garbage_removal.jpeg';
import general_contractor from './general_contractor.jpeg';
import glass_and_mirrors from './glass_and_mirrors.jpeg';
import grout_services from './grout_services.jpeg';
import gutter_services from './gutter_services.jpeg';
import handyman from './handyman.jpeg';
import holiday_decorations from './holiday_decorations.jpeg';
import home_cleaning from './home_cleaning.jpeg';
import home_inspector from './home_inspector.jpeg';
import insulation from './insulation.jpeg';
import irrigation from './irrigation.jpeg';
import laminate_and_hardwood_flooring from './laminate_and_hardwood_flooring.jpeg';
import landscaping from './landscaping.jpeg';
import locksmith from './locksmith.jpeg';
import masonry from './masonry.jpeg';
import mobile_home_repair from './mobile_home_repair.jpeg';
import painting from './painting.jpeg';
import patio_coverings from './patio_converings.jpeg';
import paving from './paving.jpeg';
import plumbing from './plumbing.jpeg';
import pool_and_hot_tub_services from './pool_and_hot_tub_services.jpeg';
import pool_cleaners from './pool_cleaners.jpeg';
import power_washing from './power_washing.jpeg';
import refinishing from './refinishing.jpeg';
import roof_inspectors from './roof_inspectors.jpeg';
import roofing from './roofing.jpeg';
import security_systems from './security_systems.jpeg';
import shutters from './shutters.jpeg';
import siding from './siding.jpeg';
import solar_installation from './solar_installation.jpeg';
import stucco from './stucco.jpeg';
import tiling from './tiling.jpeg';
import tree_services from './tree_services.jpeg';
import wallpapering from './wallpapering.jpeg';
import water_purification from './water_purification.jpeg';
import waterproofing from './waterproofing.jpeg';
import window_washing from './window_washing.jpeg';
import windows_and_doors from './windows_and_doors.jpeg';

const services: { [key: string]: string } = {
  countertop_installation,
  air_conditioning,
  cabinetry,
  carpentry,
  carpet_installation,
  concrete,
  damage_restoration,
  decks_and_railings,
  demoolition,
  drywall,
  electrical,
  excavation,
  fences_and_gates,
  flooring,
  garage_door_services,
  garbage_removal,
  general_contractor,
  glass_and_mirrors,
  grout_services,
  gutter_services,
  handyman,
  holiday_decorations,
  home_cleaning,
  home_inspector,
  insulation,
  irrigation,
  laminate_and_hardwood_flooring,
  landscaping,
  locksmith,
  masonry,
  mobile_home_repair,
  painting,
  patio_coverings,
  paving,
  plumbing,
  pool_and_hot_tub_services,
  pool_cleaners,
  power_washing,
  refinishing,
  roof_inspectors,
  roofing,
  security_systems,
  shutters,
  siding,
  solar_installation,
  stucco,
  tiling,
  tree_services,
  wallpapering,
  water_purification,
  waterproofing,
  window_washing,
  windows_and_doors
}

export const homeServicePlaceholder = (category: ServiceCategory) => {
  return services[category.toLowerCase()]

}