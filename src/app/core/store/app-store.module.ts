import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {ErrorStoreModule} from "./error/error-store.module";
import {AccountStoreModule} from "./account/account-store.module";
import {UserStoreModule} from "./user/user-store.module";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    AccountStoreModule,
    ErrorStoreModule,
    UserStoreModule,
  ],
})
export class AppStoreModule {}
