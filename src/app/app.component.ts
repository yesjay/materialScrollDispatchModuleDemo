import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'cdkVirtural';
  items: any;

  ngOnInit() {
    this.items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
  }
}
