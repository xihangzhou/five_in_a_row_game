import Square from '../Square'
import '../Board/index.css'

//这个Board对外提供两个数值，rowNum,colNum去决定这个棋盘的大小
function Board(props){

    function renderSquare(row,col){
        return(
            <Square 
            onClick={()=>{props.onClick(row,col)}} 
            val={props.squares[row][col]}
            key={col}
            >
            </Square>
        )
    }


    function renderBoard(squares){
        let board = [];
        for(let i = 0;i < props.rowNum;i++){
            board[board.length] = (
                <div className='row' key={i}>
                    {
                        squares[i].map((square,j)=>{
                            return(
                                renderSquare(i,j)
                            )
                        })
                    }
                </div>
            )
        }
        return board;
    }

    return (
        <div className='board'>
            {
                renderBoard(props.squares)
            }
        </div>
    )
}
export default Board;