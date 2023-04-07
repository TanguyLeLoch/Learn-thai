import React from 'react'
import './App.css'
import {Link, Outlet, useLocation} from "react-router-dom";
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
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

`
const StyledLink = styled(Link)`
  ${(props: { $active: boolean }) => props.$active ? "text-decoration: underline; color: white" : ""}
`

function App() {
    let {state} = useLocation();
    console.log("location", state);
    return (
        <div className="App">
            <h1>Choose a lesson</h1>
            <StyledList>
                <StyledElem><StyledLink $active={state === "read"} to="/read" state={"read"}>Roman to thai
                    consonants</StyledLink></StyledElem>
                <StyledElem><StyledLink $active={state === "listen"} to="/listen" state={"listen"}>Sound to thai
                    consonants</StyledLink></StyledElem>
            </StyledList>
            <Outlet/>
        </div>
    )
}

export default App
