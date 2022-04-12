import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { AllCategoryAtom } from "./atom";

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
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const newCategories = useSetRecoilState(AllCategoryAtom);
  const onSubmit = handleSubmit(({ categoryName }) => {
    newCategories((oldCategory) => [categoryName, ...oldCategory]);
    setValue("categoryName", "");
  });

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
