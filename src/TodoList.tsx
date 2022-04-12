import styled from "styled-components";
import React, { useEffect } from "react";
import CreateTodo from "./CreateTodo";
import { useRecoilState, useRecoilValue } from "recoil";
import { CategoryAtom, AllCategoryAtom, TodoSelector } from "./atom";
import Todo from "./Todo";
import NewCategory from "./CreateCategory";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
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
const SelectCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  select {
    height: 30px;
  }
`;

function TodoList() {
  const [category, setCategory] = useRecoilState(CategoryAtom);
  const OnInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const selected = event.currentTarget.value;
    setCategory(selected as any);
  };
  const ToDos = useRecoilValue(TodoSelector);
  const allCategory = useRecoilValue(AllCategoryAtom);

  useEffect(() => {
    let currentCategory = JSON.stringify(category);
    localStorage.setItem("currentCategory", currentCategory);
  }, [category]);

  return (
    <Main>
      <h1>ToDo-List</h1>
      <NewCategory></NewCategory>
      <SelectCategory>
        <h3>Choice Category: </h3>
        <select value={category} onInput={OnInput}>
          {allCategory.map((cate, index) => (
            <option key={index} value={cate}>
              {cate}
            </option>
          ))}
        </select>
      </SelectCategory>

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
