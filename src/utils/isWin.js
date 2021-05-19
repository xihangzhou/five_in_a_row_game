//这个函数传入一个数组然后检查是否有赢家，如果有的话返回赢家，没有返回null
function isWin(squares){
    let rowNum = squares.length;
    let colNum = squares[0] ? squares[0].length : 0;
    for(let i = 0;i < rowNum;i++){
        for(let j = 0;j < colNum;j++){
            if(isOver(squares,i,j)){
                return squares[i][j];
            }
        }
    }
    return null;
} 

function isOver(squares,i,j){
    let rowCount = 1;
    let colCount = 1;
    let lefSlpCount = 1;
    let rigtSlpCount = 1;
    let mySelf = squares[i][j];
    if(mySelf === null) return false;
    for(let k = 1;k <= 4;k++){
        rowCount = squares[i + k] && squares[i + k][j] === mySelf ? rowCount + 1 : 0;
        colCount = squares[i] && squares[i][j + k] === mySelf ? colCount + 1 : 0;
        lefSlpCount = squares[i + k] && squares[i + k][j - k] === mySelf ? lefSlpCount + 1 : 0;
        rigtSlpCount = squares[i + k] && squares[i + k][j + k] === mySelf ? rigtSlpCount + 1 : 0;
    }
    if(rowCount === 5 || colCount === 5 || lefSlpCount === 5 || rigtSlpCount === 5){
        return true;
    }else{
        return false;
    }
}

export default isWin;