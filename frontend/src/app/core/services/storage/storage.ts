import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private platformId = inject(PLATFORM_ID);

  private get browser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getItem(key: string): string | null {

    if (!this.browser) {
      return null;
    }

    return localStorage.getItem(key);
  }

  setItem(
    key: string,
    value: string
  ): void {

    if (!this.browser) {
      return;
    }

    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {

    if (!this.browser) {
      return;
    }

    localStorage.removeItem(key);
  }
}