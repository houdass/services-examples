import {
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';
import { CORE_GUARD } from './core.token';

export function coreRootGuard(counterService: CounterService): boolean {
  return !!counterService;
}

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @Inject(CORE_GUARD) isAlreadyLoaded: boolean) {
    if (isAlreadyLoaded) {
      throw new TypeError('CoreModule.forRoot() called twice. Feature modules should use CoreModule.forChild() instead.')
    }
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        CounterService,
        {
          provide: CORE_GUARD,
          useFactory: coreRootGuard,
          deps: [[CounterService, new Optional(), new SkipSelf()]],
        },
      ],
    };
  }

  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
