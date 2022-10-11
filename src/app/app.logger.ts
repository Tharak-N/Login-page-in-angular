import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class Logger {
  log(log_message) {
     console.log(`${log_message}`)
  }

  warn (warn_message) {
    console.log(`${warn_message}`)
  }

  error(err_message) {
    console.warn(`${err_message}`)
  }
}
