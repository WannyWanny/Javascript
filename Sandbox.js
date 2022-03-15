function makeRangeIterator(start = 0, end  =Infinity, step = 1){
    let nextIndex = start;
    let n = 0;

    let rangeIterator = {
        next: function (){
            let result;
            if(nextIndex < end){
                result = {value: nextIndex, done:false};
            }else if(nextIndex == end){
                result = {value: n, done: true};
            }else{
                result = {dont: true};
            }
            nextIndex += step;
            n++;
            return result;
        }
    };

    return rangeIterator;
}

let it = makeRangeIterator(1, 4);

let result = it.next();
while(!result.done){
    console.log(result.value);      //1 2 3
    result = it.next();
}


