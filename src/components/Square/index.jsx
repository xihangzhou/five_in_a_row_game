import './index.css';
function Square(props){
    return (
        <div className='square'>
            <button onClick={props.onClick}>
                {props.val}
            </button>
        </div>
    )
}

export default Square;