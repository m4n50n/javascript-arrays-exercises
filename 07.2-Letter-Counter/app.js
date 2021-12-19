let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
par = par.toLowerCase();
let counts = {};

// your code here
for (let i=0; i < par.length; i++) {
    let letter = par[i].replace(" ", "")
    
    if (letter == "") { continue; }
    if (counts[letter] === undefined) { counts[letter] = 1; }
    else {
        counts[letter] += 1;
    }
}


console.log(counts);