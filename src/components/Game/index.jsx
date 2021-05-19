import Board from '../Board'
import './index.css'
import {useState} from 'react'
import isWin from '../../utils/isWin'
import deepClone from '../../utils/deepClone'

function Game(props){

    let initialSquares = new Array(props.rowNum).fill(null).map(()=>{
        return new Array(props.colNum).fill(null)
    })

    const [history,setHistory] = useState([initialSquares]);
    const [currentStep,setCurrentStep] = useState(0);
    const [isXNext,setIsXNext] = useState(true);

    function changeVal(row,col){
        let squares = history[currentStep];
        let winner = isWin(squares);
        if(winner){
            return;
        }
        if(squares[row][col]!==null) return;
        let newSquares = deepClone(squares);
        newSquares[row][col] = isXNext ? 'X' : 'O';
        let newHistory = history.slice(0,currentStep + 1);
        newHistory.push(newSquares);
        setIsXNext(!isXNext);
        setHistory(newHistory);
        setCurrentStep(currentStep + 1);
    }

    function changeCurrentStep(index){
        setCurrentStep(index);
    }

    return(
        <div className='game'>
            <Board 
                rowNum={props.rowNum} 
                colNum={props.colNum} 
                squares={history[currentStep]}
                onClick={(row,col)=>{changeVal(row,col)}}
                className='board'
            >
            </Board>
            <div className='tipBar'>
                <div className='showWinner'>
                    the winner is {isWin(history[currentStep])}
                </div>
                <div className='stepList'>
                    <ol>
                        {
                            history.map((squares,index)=>{
                                return (
                                    <li key={index}>
                                        <button onClick={()=>{changeCurrentStep(index)}}>
                                        come back to {index} step
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}


export default Game;