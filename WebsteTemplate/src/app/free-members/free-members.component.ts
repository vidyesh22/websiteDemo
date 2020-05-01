import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allData } from 'src/constatns/allResult';
import * as _ from 'lodash';

@Component({
  selector: 'app-free-members',
  templateUrl: './free-members.component.html',
  styleUrls: ['./free-members.component.css']
})
export class FreeMembersComponent implements OnInit {

  pagination = {
    currentPage: 1,
    total : undefined,
    pageSize : 10,
    begin: 1,
    end: undefined
  }
  pageData = [];
  premiumMembers = [];
  total = [];
  allPremiumMemebers = [];
  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
    this.pagination.total = 1;
    this.allPremiumMemebers = _.cloneDeep(allData);
    this.updatePagination(0);
    const total = Math.floor(allData.length/10);
    console.log(allData);
    console.log(total);
    for (let i = 0; i < total; i++) {
      this.total.push('a');
    }
  }

  members = [
  ]

  updatePagination(pageNumber: any): void {
    this.pageData = [];
    this.allPremiumMemebers = _.cloneDeep(allData);
    this.pagination.begin = pageNumber * 10;
    this.pagination.end = (pageNumber * 10) + 9; 
    this.premiumMembers = this.allPremiumMemebers.splice(this.pagination.begin, this.pagination.end);
  }

}
