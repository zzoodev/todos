import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CategoryAtom, TodosAtom } from "./atom";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const category = useRecoilValue(CategoryAtom);
  const setToDos = useSetRecoilState(TodosAtom);

  const onSubmit = handleSubmit<IForm>(({ toDo }) => {
    setToDos((oldTodo) => [
      { text: toDo, id: Date.now(), category },
      ...oldTodo,
    ]);
    setValue("toDo", "");
  });

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
