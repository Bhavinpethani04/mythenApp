import { NgFor, CommonModule, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { statusFilter, renewalDateFilter } from '../../models/commonData';

@Component({
  selector: 'app-piplineist',
  standalone: true,
  imports: [NgFor, CommonModule, NgIf, NgStyle],
  templateUrl: './piplineist.component.html',
  styleUrl: './piplineist.component.css',
})
export class PiplineistComponent {
  @Input({ required: true }) piplineListData: any;
  @Input({ required: true }) isMap: any;
  @Input() callBackShowMap!: () => void;
  @Input() statusFilter: any[] = statusFilter;
  @Input() renewalDateFilter: any[] = renewalDateFilter;

  

  isHidenStatus: boolean = true;
  isHidenLimit: boolean = true;
  isHiddenDate: boolean = true;

  onPressMap = () => {
    this.callBackShowMap();
  };

  onPressFilterButton = (filter: string) => {

    if (filter === 'status') {
      this.isHidenLimit = true
      this.isHiddenDate = true;
      this.isHidenStatus = !this.isHidenStatus;
    }
    
    if (filter === 'limit') {
      this.isHidenStatus = true
      this.isHiddenDate = true;
      this.isHidenLimit = !this.isHidenLimit;
    }

    if (filter === 'date') {
      this.isHidenStatus = true
      this.isHidenLimit = true
      this.isHiddenDate = !this.isHiddenDate;
    }
  };
}
