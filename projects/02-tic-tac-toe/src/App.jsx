import { useState } from "react"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.jsx"
import { checkWinnerFrom } from "./logic/board.jsx"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { checkEndGame } from "./logic/board.jsx"
import { resetGameStorage, saveGameToStorage } from "./logic/storage/index.js"

function App() {

  const [board, setBoard] = useState(() => {
      const boardFromStorage = window.localStorage.getItem('board')
      if (boardFromStorage) {
        return JSON.parse(boardFromStorage)
      }
      return Array(9).fill(null)
    }
  )
    
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
    
  })
  // null significa que no hay ganador, false significa que hay empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // si hay algo en la celda no se sobreescribira
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar partida 
    saveGameToStorage({
      turn: newTurn,
      board: newBoard
    })

    // checamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <div className="cell" key={index}>
                <span className="cell__content">
                  <Square
                    key={index}
                    index={index}
                    updateBoard={updateBoard}
                  >
                    {square}
                  </Square>
                </span>
              </div>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )

}

export default App
