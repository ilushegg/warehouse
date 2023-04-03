import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LimitModel } from 'src/app/models/limit';
import { NeedAmountModel } from 'src/app/models/need-amount';
import { RequestModel } from 'src/app/models/request';
import { Entity } from 'src/app/services/calculation.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  value: string;

  @Input()
  entities: RequestModel[] | LimitModel[] | NeedAmountModel[];

  @Output()
  entitiesChanged = new EventEmitter<RequestModel[] | LimitModel[] | NeedAmountModel[]>();

  resetEntities: RequestModel[] | LimitModel[] | NeedAmountModel[];

  constructor(
    private searchService: SearchService,
    private _cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.resetEntities = this.entities;
    this._cdr.markForCheck();
  }

  search() {
    let values = this.searchService.search(this.value, this.entities)
    this.entitiesChanged.emit(values);
    this._cdr.markForCheck();

  }

  reset() {
    this.entitiesChanged.emit(this.resetEntities);
  }

  isEntitiesChanged() {
    return this.entities == this.resetEntities
  }
}
