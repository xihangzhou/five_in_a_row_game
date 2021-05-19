function deepClone(arr){
    let newArr = [];
    let len = arr.length;
    for(let i = 0;i < len;i++){
        if(typeof arr[i] === 'object' && arr[i] !== null){
            newArr[i] = deepClone(arr[i]);
        }else{
            newArr[i] = arr[i];
        }
    }
    return newArr;
}

export default deepClone;