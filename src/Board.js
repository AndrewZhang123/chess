import Square from './Square'
import './Board.css'

const Board = () => {
    return (
        generateBoard()
    )
}

// create board of 64 alternating colored squares
const generateBoard = () => {
    // create arr of 64 that represents board
    const arr = []
    for (let i = 0; i < 8; i++) {
        arr.push([])
        const lastCol = arr[arr.length - 1]
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                lastCol.push("light")
            } else {
                lastCol.push("dark")
            }
        }
    }
    // create 64 React elems from arr
    return arr.map(row => {
        return (
            <div className='row'>
                {row.map(val => {
                    return <Square color={val}></Square>
                })}
            </div>
        )
    })
}

export default Board