import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ItemReqsService {

  constructor() { }

}

export enum Items {
  hMatches = 'Hunting Matches',
  dFuel = 'Dry Fuel',
  matches = 'Classic Matches',
  aFilter = 'Air Filter for Gas Mask',
  thermometer = 'Thermometer',
  nails = 'Box of Nails', 
  bolts = 'Bolts', 
  hose = 'Corrogated Hose', 
  ductTape = 'Duct Tape',
  eDrill = 'Electric Drill',
  eMotor = 'Electric Motor',
  alkali = 'Alkali',
  multitool = 'Multitool',
  lightbulb = 'Lightbulb',
  pGuage = 'Pressure Guage',
  helix = 'Helix Coil',
  screwNut = 'Screw Nuts',
  screws = 'Pack of Screws',
  toolSet = 'Tool Set',
  tube = 'Silicone Tube',
  wrench = 'Wrench',
  elitePliers = 'Elite Pliers',
  fireklean = 'Fireklean Gun Lube',
  sparkPlug = 'Spark Plug',
  xeno = 'Xenomorph',
  hDrill = 'Hand Drill',
  wd40 = 'WD-40',
  shus = 'Shustrilo Sealing Foam',
  cpuFan = 'CPU Fan',
  capacitors = 'Capacitors',
  carBatt = 'Car Battery',
  hdd = 'Damaged HDD',
  relay = 'Phase Control Relay',
  psu = 'Power Supply Unit',
  pCord = 'Power Cord',
  pcb = 'Printed Circuit Board',
  ssd = 'SSD',
  flashDrive = 'Flash Drive',
  wires = 'Wires',
  lcd = 'LCD',
  nixxor = 'Nixxor',
  sgc10 = 'SGC-10',
  vpx = 'VPX',
  gasAn = 'Gas Analyzer',
  mCable = 'Military Cable',
  aesa = 'AESA',
  pFilter = 'Power Filter',
  bloodset = 'Bloodset',
  nacl = 'NaCL',
  sodium = 'Sodium',
  coffee = 'Coffee',
  ledx = 'LEDX',
  oScope = 'Optholmoscope',
  lion = 'Bronze Lion',
  intel = 'Intelligence Folder',
  skull = 'Skull Ring',
  gChain = 'Gold Chain',
  roler = 'Roler Watch',
  roubles = 'Roubles',
  euros = 'Euros',
  usd = 'USD'
}

export interface ItemRequirement {
  type: Items;
  amount: number;
}
