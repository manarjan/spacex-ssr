import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { SearchFilter, SpaceXLaunch } from 'src/app/models/space-x.model';
import { SpaceXService } from 'src/app/services/space-x.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListComponent implements OnInit {
  constructor(
    private spaceXService: SpaceXService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  spinner: boolean = false;

  launches$: Observable<SpaceXLaunch[]>;

  ngOnInit(): void {
    this.launches$ = this.route.queryParams.pipe(
      tap(() => {
        this.spinner = true;
        this.cdr.detectChanges();
      }),
      switchMap((params: SearchFilter) => {
        return this.spaceXService.getLaunches(params).pipe(
          finalize(() => {
            this.spinner = false;
            this.cdr.detectChanges();
          })
        );
      })
    );
  }
}
