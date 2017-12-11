import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyListComponent implements OnInit {

  public companies$: Observable<Company[]>;
  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
      .subscribe(() => this.getCompanies());
  }

}
