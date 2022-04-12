import { useEffect } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import { useSetRecoilState } from "recoil";
import { AllCategoryAtom, TodosAtom, CategoryAtom } from "./atom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const getToDos = JSON.parse(localStorage.getItem("toDos")!);
const getCategories = JSON.parse(localStorage.getItem("allCategory")!);
const getCategory = JSON.parse(localStorage.getItem("currentCategory")!);

function App() {
  const setTodos = useSetRecoilState(TodosAtom);
  const setAllCategory = useSetRecoilState(AllCategoryAtom);
  const setCategory = useSetRecoilState(CategoryAtom);

  useEffect(() => {
    if (getToDos === null || getCategories === null || getCategory === null) {
      return;
    }
    setTodos(getToDos);
    setAllCategory(getCategories);
    setCategory(getCategory);
  }, []);

  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
  );
}

export default App;
