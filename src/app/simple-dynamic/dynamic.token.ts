import { InjectionToken, Type } from "@angular/core";

export const DYNAMIC_COMPONENT = new InjectionToken<Type<unknown>>('DYNAMIC_COMPONENT');