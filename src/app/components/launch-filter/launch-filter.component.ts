import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchFilter } from 'src/app/models/space-x.model';
import { filterParams } from 'src/app/utilities/functions';

@Component({
  selector: 'app-launch-filter',
  templateUrl: './launch-filter.component.html',
  styleUrls: ['./launch-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchFilterComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}
  launchFilterForm: FormGroup = this.fb.group({
    launch_year: null,
    launch_success: null,
    land_success: null,
  });

  launchYears: number[] = Array.from(new Array(15), (_, i) => 2006 + i);

  ngOnInit(): void {
    const {
      launch_year,
      launch_success,
      land_success,
    } = this.route.snapshot.queryParams;

    this.launchFilterForm.patchValue(
      {
        launch_year: launch_year ? +launch_year : null,
        launch_success: launch_success ? JSON.parse(launch_success) : null,
        land_success: land_success ? JSON.parse(land_success) : null,
      },
      {
        emitEvent: false,
      }
    );

    this.launchFilterForm.valueChanges.subscribe((value: SearchFilter) => {
      this.router.navigate(['.'], {
        queryParams: filterParams(value),
      });
    });
  }
}
