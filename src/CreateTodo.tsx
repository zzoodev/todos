import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { CategoryAtom, TodosAtom } from "./atom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  input {
    width: 80%;
    height: 30px;
  }
  button {
    width: 15%;
    height: 35px;
  }
`;

interface IForm {
  toDo: string;
}

function CreateTodo() {
  const { register, handleSubmit, setValue } = useForm();

  const category = useRecoilValue(CategoryAtom);

  const [toDos, setToDos] = useRecoilState(TodosAtom);

  const onSubmit = handleSubmit<IForm>(({ toDo }) => {
    setToDos((oldTodo) => [
      { text: toDo, id: Date.now(), category },
      ...oldTodo,
    ]);
    setValue("toDo", "");
  });

  useEffect(() => {
    let toDoJson = JSON.stringify(toDos);
    localStorage.setItem("toDos", toDoJson);
  }, [toDos]);

  return (
    <Form onSubmit={onSubmit}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </Form>
  );
}

export default CreateTodo;
