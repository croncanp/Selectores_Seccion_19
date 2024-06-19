export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europa = 'Europa',
  Oceania = 'Oceania'
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}

export interface Country {
    capital:      string[];
    flag:         string;
    independent:  boolean;
    landlocked:   boolean;
    borders:      string[];
    flags:        CoatOfArms;
    capitalInfo:  CapitalInfo;
    ccn3:         string;
    coatOfArms:   CoatOfArms;
    demonyms:     Demonyms;
    fifa:         string;
    car:          Car;
    translations: { [key: string]: Translation };
    altSpellings: string[];
    area:         number;
    languages:    Languages;
    maps:         Maps;
    subregion:    string;
    idd:          Idd;
    tld:          string[];
    unMember:     boolean;
    continents:   string[];
    population:   number;
    startOfWeek:  string;
    timezones:    string[];
    name:         Name;
    cca3:         string;
    region:       string;
    latlng:       number[];
    cca2:         string;
    status:       string;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    side:  string;
    signs: string[];
}

export interface CoatOfArms {
    svg: string;
    png: string;
}

export interface Demonyms {
    fra: Eng;
    eng: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    suffixes: string[];
    root:     string;
}

export interface Languages {
    eng: string;
}

export interface Maps {
    openStreetMaps: string;
    googleMaps:     string;
}

export interface Name {
    nativeName: NativeName;
    common:     string;
    official:   string;
}

export interface NativeName {
    eng: Translation;
}

export interface Translation {
    common:   string;
    official: string;
}
