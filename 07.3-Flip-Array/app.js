var arr = [45,67,87,23,5,32,60];

//Your code here.
let final_array = [];
for (let i = arr.length - 1; i >= 0; i--) {
    final_array.push(arr[i]);
}

console.log(final_array);
