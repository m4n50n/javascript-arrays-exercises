var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = [];
    
    //firstArray.map((value) => newArray.push(value));
    //secondArray.map((value) => newArray.push(value));

    return newArray.concat(firstArray).concat(secondArray);
}

console.log(mergeArrays(chunk_one, chunk_two));