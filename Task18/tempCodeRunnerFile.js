
arr = [1,2,3,4,5,6,7,8,9,10];


let Prime_num = arr.filter(num => {
    num < 2 ? false :
    num == 2 ? true :
    for(let i = 2; i < num ; i++){
        num % i == 0? true : false
    }

})
console.log(Prime_num)
