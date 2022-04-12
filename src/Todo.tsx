import { ITodo } from "./atom";
import styled from "styled-components";
import { TodosAtom, AllCategoryAtom } from "./atom";
import { useSetRecoilState, useRecoilValue } from "recoil";

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 95%;
`;
const Btns = styled.div`
  display: flex;
  button {
    margin-left: 10px;
  }
`;
function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(TodosAtom);
  const allCategory = useRecoilValue(AllCategoryAtom);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const changed = event.currentTarget.innerText;
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id == id);
      const newTodo = { text, category: changed as any, id };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <Li>
      <span>{text}</span>
      <Btns>
        {/* {category !== CategoryEnum.TO_DO && (
          <button onClick={onClick}>TO_DO</button>
        )}
        {category !== CategoryEnum.DOING && (
          <button onClick={onClick}>DOING</button>
        )}
        {category !== CategoryEnum.DONE && (
          <button onClick={onClick}>DONE</button>
        )} */}
        {allCategory.map((cate, index) => {
          return (
            cate !== category && (
              <button key={index} onClick={onClick}>
                {cate}
              </button>
            )
          );
        })}
      </Btns>
    </Li>
  );
}

export default Todo;
