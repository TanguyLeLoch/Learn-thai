import React from 'react'
import './App.css'
import {Outlet} from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`
const StyledElem = styled.li`
  list-style: none;
  font-size: 2rem;
  font-weight: bold;
  margin: 20px;
  padding: 0;
`

function App() {

    return (
        <div className="App">
            <h1>Choose a lesson</h1>
            <StyledList>
                <StyledElem><a href="/consonants">Latin to thai consonants</a></StyledElem>
                <StyledElem><a href="/sound">Sound to thai consonants</a></StyledElem>
            </StyledList>
            <Outlet/>
        </div>
    )
}

export default App
