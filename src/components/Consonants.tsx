import React, {useState, KeyboardEvent} from 'react'
import items, {letter} from "./ConsonantsList";
import styled from 'styled-components';

const Letter = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`
const Toast = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  padding: 10px 20px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  text-shadow: 1px 1px 10px black;
  background-color: ${(props: { $result: boolean }) => props.$result ? "#7aff7a" : "#e75555"};
`
const StyledConsonants = styled.div`
  border: 2px solid white;
  border-radius: 20px;
  padding: 70px;
`

function Consonants() {
    const [count, setCount] = useState(0)
    const [result, setResult] = useState<null | boolean>(null)
    const [input, setInput] = useState('')

    const handleSuccess = () => {
        setResult(true)
        setTimeout(() => {
            setCount((count) => count + 1)
            setResult(null)
            setInput('')
        }, 1000)
    }

    const handleFailure = () => {
        setResult(false)
        setTimeout(() => {
            setResult(null)
            setInput('')
        }, 1000)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (event.currentTarget.value === items[count].thai) {
                handleSuccess();
            } else {
                handleFailure();
            }
        } else {
            setInput(event.currentTarget.value)
        }
    }

    return (
        <StyledConsonants>
            {count === items.length ? <h1>Congratulation</h1> :
                <>
                    <h1>Type in Thai script</h1>
                    {
                        result !== null && <Toast $result={result}> {result ? 'Correct' : 'Wrong'}</Toast>
                    }
                    <Letter> {items[count].latin}</Letter>
                    <input type="text" onKeyDown={(event) => handleKeyDown(event)} placeholder={'answer here'}
                           value={input} onChange={(event) => setInput(event.target.value)}/>
                </>
            }

        </StyledConsonants>
    )
}

export default Consonants