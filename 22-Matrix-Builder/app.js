const matrixBuilder = (num) => {
    let arr = [];

    for (let i = 0; i < num; i++) {
        let item = [];

        for (let o = 0; o < num; o++) {
            item.push(Math.round(Math.random()));
        }

        arr.push(item);
    }

    return arr;
}

console.log(matrixBuilder(5))