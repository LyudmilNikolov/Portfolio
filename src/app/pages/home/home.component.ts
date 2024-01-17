import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TypewriterService } from '../../services/typewriter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  titles = [
    "Software Developer",
    "Contractor",
    "Open Source Enthusiast",
  ];
  typedText = signal('');

  private destroy$ = new Subject<void>();

  constructor(private typewriterService: TypewriterService) {}

  ngOnInit(): void {
    this.typewriterService.getTypewriterEffect(this.titles)
      .pipe(takeUntil(this.destroy$))
      .subscribe(text => {
        this.typedText.set(text);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
