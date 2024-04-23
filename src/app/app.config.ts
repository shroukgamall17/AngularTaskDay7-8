import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideStore } from '@ngrx/store';
import {countReducer} from './store/counter/counter.reducer'
import { languageReducer } from './store/language/language.reducer';
import { provideEffects } from '@ngrx/effects';
import { LanguageEffect } from './store/language/language.effect';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideStore({
        counter: countReducer,
        language: languageReducer
    }), provideEffects([LanguageEffect])],
};
