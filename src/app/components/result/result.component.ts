import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import * as selectors from '../../+canvas-objects/canvas-objects.selectors';
import { Store } from '@ngrx/store';
import { CanvasObjectsState } from 'src/app/+canvas-objects/canvas-objects.reducer';
import { Subject, takeUntil } from 'rxjs';
import * as CanvasObjectsActions from '../../+canvas-objects/canvas-objects.actions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnDestroy {
  public result: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<CanvasObjectsState>) {
    this.store
      .select(selectors.getCanvasObjects)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => (this.result = value));
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.store.dispatch(CanvasObjectsActions.clearStore());
  }
}
