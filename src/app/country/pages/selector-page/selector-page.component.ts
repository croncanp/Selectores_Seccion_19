import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesService} from '../../services/countries.service';
import {Region, SmallCountry} from '../../interfaces/country.interfaces';
import {filter, Observable, switchMap, tap} from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit{
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];
  constructor(private formBuilder: FormBuilder, private countriesServices: CountriesService) {
  }

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }


  public myForm: FormGroup = this.formBuilder.group({
    region:['',[Validators.required]],
    country:['',[Validators.required]],
    border:['',[Validators.required]]
  })

  get regions(): Region[]{
    return this.countriesServices.regions;
  }

  onRegionChanged(): void{
    this.myForm.get('region')!.valueChanges
      .pipe(
        tap(() => this.myForm.get('country')!.setValue('')),
        tap(() => this.borders = []),
        switchMap( (region) => this.countriesServices.getCountriesByRegion(region)),
      )
      .subscribe(countries => {
        this.countriesByRegion = countries;
      });
  }

  onCountryChanged(): void{
    this.myForm.get('country')!.valueChanges
      .pipe(
        tap(() => this.myForm.get('border')!.setValue('')),
        filter((value:string) => value.length > 0),
        switchMap( (alphaCode) => this.countriesServices.getCountryByAlphaCode(alphaCode)),
        switchMap(country => this.countriesServices.getCountryBordersByCodes(country.borders))
      )
      .subscribe(countries => {
        this.borders = countries;
      });
  }


}
