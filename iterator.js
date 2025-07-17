let str = 'hello world';

let iter = str[Symbol.iterator]();
while (true){
    let result = iter.next();
    if(result.done)break;
    console.log(result.value);

}