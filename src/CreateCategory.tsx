import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { AllCategoryAtom } from "./atom";
import { useEffect } from "react";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  input {
    width: 80%;
  }
`;

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm();
  const [allCategory, setAllCategory] = useRecoilState(AllCategoryAtom);
  const onSubmit = handleSubmit(({ categoryName }) => {
    setAllCategory((oldCategory) => [categoryName, ...oldCategory]);
    setValue("categoryName", "");
  });

  useEffect(() => {
    let categoryJson = JSON.stringify(allCategory);
    localStorage.setItem("allCategory", categoryJson);
  }, [allCategory]);

  return (
    <Form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="create category.."
        {...register("categoryName", { required: true, minLength: 2 })}
      />
      <button>Add Category</button>
    </Form>
  );
}

export default CreateCategory;
