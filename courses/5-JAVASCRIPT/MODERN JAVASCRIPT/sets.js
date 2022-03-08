
// Sets (collection - unique value)

let val;
var mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(4);
mySet.add('iki');
mySet.add({a:1,b:2});

var obj = {a:1,b:2};
mySet.add(obj);

val = mySet.has(1);
val = mySet.has(13);
val = mySet.has(obj);

val = mySet.size;
mySet.delete(1);


console.log(mySet);

for(let item of mySet){
    console.log(item);
}

for(let item of mySet.keys()){
    console.log(item);
}


for(let item of mySet.values()){
    console.log(item);
}


for(let [key,value] of mySet.entries()){
    console.log(key,value);
}


console.log(Array.from(mySet));

let mySet2 = new Set([1,2,3,4]);

console.log(mySet2);

//Intersects

// var intersect = new Set(Array.from(mySet).filter(x=>mySet2.has(x)));
// console.log(intersect);

var intersect = new Set([...mySet].filter(x=>mySet2.has(x)));
console.log(intersect);




// Differences

var diffrecence = new Set([...mySet].filter(x=>!mySet2.has(x)));
console.log(diffrecence);














