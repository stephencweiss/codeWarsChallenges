// function dirReduc(arr){
//   let repeat = false;
//   const pairs = {
//     NORTH: 'SOUTH',
//     SOUTH: 'NORTH',
//     EAST: 'WEST',
//     WEST: 'EAST'
//   }

//   for (let i = 0; i < arr.length-1; i++) {
//     let curVal = arr[i];
//     let nextVal = arr[i+1];

//     if (pairs[curVal] === nextVal) {
//       repeat = true;
//       arr.splice(i, 2)
//       i -= 1;
//     }
//   }
//   if (repeat) {
//     return dirReduc(arr)
//   }
//   return arr;
// }



// Shorter approach that actually uses a reducer
const opposites = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  EAST: 'WEST',
  WEST: 'EAST'
}

const dirReduce = plan => {
  const reducer = (directions, direction) => {
    directions[directions.length - 1] === opposites[direction] ? directions.pop() : directions.push(direction);
    return directions;
  }
  return plan.reduce( reducer, [] );
}

const arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
console.log(`the results of the shorter method are --> `, dirReduce(arr));