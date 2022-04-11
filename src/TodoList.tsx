import styled from "styled-components";
import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import { useRecoilState, useRecoilValue } from "recoil";
import { CategoryAtom, CategoryEnum, TodosAtom, TodoSelector } from "./atom";
import Todo from "./Todo";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 700px;
  border: 1px solid #333;
  padding: 20px;
  box-sizing: border-box;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function TodoList() {
  const [category, setCategory] = useRecoilState(CategoryAtom);
  const OnInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const selected = event.currentTarget.value;
    setCategory(selected as any);
  };
  const ToDos = useRecoilValue(TodoSelector);

  return (
    <Main>
      <h1>ToDo-List</h1>
      <select value={category} onInput={OnInput}>
        <option value={CategoryEnum.TO_DO}>TO_DO</option>
        <option value={CategoryEnum.DOING}>DOING</option>
        <option value={CategoryEnum.DONE}>DONE</option>
      </select>
      <CreateTodo></CreateTodo>
      <List>
        {ToDos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </List>
    </Main>
  );
}

export default TodoList;
