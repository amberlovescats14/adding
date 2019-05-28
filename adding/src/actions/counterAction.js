export const addA = (countB) => {
  return {
    type: 'ADD_A',
    payload: countB
  }
}

export const addB = (countA) => {

  return {
    type: 'ADD_B',
    payload: countA
  }
}

// export const add