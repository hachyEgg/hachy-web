import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'eggStatus'})
export class EggStatus implements PipeTransform {
  transform(value: number): string {
    switch (value){
        case 0: return "No Egg detected"
        case 1: return "Egg discovered but with no VISIBLE DEVELOPMENT"
        case 2: return "Egg has just initiated development"
        case 3: return "Egg has matured Development"
        case 4: return "Egg has quit"
    }
  }
}