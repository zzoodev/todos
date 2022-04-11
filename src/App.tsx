import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import { RecoilRoot } from "recoil";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <TodoList />
      </Wrapper>
    </RecoilRoot>
  );
}

export default App;
