const clone = require('rfdc')()
import oh from 'object-hash';


export function areEqual(state1: any, state2: any) {
  if(!state1 || !state2){ 
      return false;
  }
  return oh.MD5(state1) === oh.MD5(state2);

}

export function cloneDeep(obj) {
  return clone(obj);
}