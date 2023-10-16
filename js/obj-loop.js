const fruits = ["apple", "orange", "mango", "rambutan", "pomelo", "jack fruit", "damson"];

for(let i=0 ; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}
for(fruit of fruits) {
    console.log(fruit);
}
for(index in fruits){
    console.log(index);
}