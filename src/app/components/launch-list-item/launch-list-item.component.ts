import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { SpaceXLaunch } from 'src/app/models/space-x.model';

@Component({
  selector: 'app-launch-list-item',
  templateUrl: './launch-list-item.component.html',
  styleUrls: ['./launch-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchListItemComponent implements OnInit {
  constructor() {}

  @Input() launch: SpaceXLaunch;

  ngOnInit(): void {}
}
