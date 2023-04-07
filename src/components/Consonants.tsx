import React, {useState, KeyboardEvent} from 'react'
import items from "./ConsonantsList";
import styled from 'styled-components';
import SoundPlayer from "./SoundPlayer";

const Letter = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`
const Toast = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
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
  padding: 40px;
  position: relative;
  @media (max-width: 600px) {
    padding: 20px;
  }
`
const Title = styled.h1`
  margin-top: 10px;
  font-size: min(3rem, 5vw);
`

const StyledInput = styled.input`
  width: 80%;
  margin: 0;
`

const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`
const ValidateButton = styled.button`
  font-size: 5vw;
  margin: 10px;
  @media (min-width: 1000px) {
    display: none;
  }
`

interface props {
    sound: boolean
}

function Consonants({sound}: props) {
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
            handleValidate(input)
        } else {
            setInput(event.currentTarget.value)
        }
    }
    const handleValidate = (input: string) => {
        if (input === items[count].thai) {
            handleSuccess();
        } else {
            handleFailure();
        }
    }
    return (
        <StyledConsonants>
            {count === items.length ? <h1>Congratulation</h1> :
                <>
                    <Title>Type in Thai script</Title>
                    {
                        result !== null && <Toast $result={result}> {result ? 'Correct' : 'Wrong'}</Toast>
                    }
                    {sound ?
                        <SoundPlayer source={`./sounds/${items[count].thai}.mp3`}/>
                        :
                        <Letter> {items[count].latin}</Letter>
                    }
                    <Answer>
                        <StyledInput type="text" onKeyDown={(event) => handleKeyDown(event)} placeholder={'answer here'}
                                     value={input} onChange={(event) => setInput(event.target.value)}/>
                        <ValidateButton onClick={() => {
                            handleValidate(input)
                        }}>✓
                        </ValidateButton>
                    </Answer>
                </>
            }
        </StyledConsonants>
    )
}

export default Consonants