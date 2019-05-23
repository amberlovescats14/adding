import {ADD } from './Types';


export const handleClick = e => {
  dispatchEvent({
    type: ADD
  })
}