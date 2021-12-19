let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
];

const getParkingLotState = (arr) => {
  let state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
  };

  for (let i = 0; i < arr.length; i++){
    for (let x = 0; x < arr[i].length; x++){
      if (arr[i][x] === 2){
        
        state.availableSlots += 1;
        state.totalSlots += 1;
      }
      else if (arr[i][x] === 1){
        state.occupiedSlots += 1;
        state.totalSlots += 1;
      }
    }
  }

  return state;
}

console.log(getParkingLotState(parking_state));