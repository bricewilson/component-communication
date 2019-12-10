import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { Reader } from "../models/reader";

export function logEagerReaders(minutes: number) {
  return ($source: Observable<Reader[]>) => $source.pipe(
    tap(readers => readers.forEach(r => r.weeklyReadingGoal > minutes ? console.log(r) : null))
  );
}