import { Observable, of } from "rxjs";
import { delay, tap } from "rxjs/operators";
import * as hash from "object-hash";

const cache = {};

// Anything exported from this file is importable by other in-browser modules.
export function fetchWithCache<T>(
  fetchOp: Observable<T>,
  url: string,
  params?: string[],
  key?: string
): Observable<T> {
  let cacheKey = key;
  if (!key) {
    cacheKey = `${params && params.length > 0 ? hash([url, ...params]) : url}`;
  }

  const value = cache[cacheKey];
  if (!value) {
    return fetchOp.pipe(
      delay(2000),
      tap((response) => {
        cache[cacheKey] = response;
        return response;
      })
    );
  }

  return of(value);
}
