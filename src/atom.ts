import { atom, selector } from "recoil";

export enum CategoryEnum {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface ITodo {
  text: string;
  id: number;
  category: CategoryEnum;
}

export const TodosAtom = atom<ITodo[]>({
  key: "todos",
  default: [],
});
export const CategoryAtom = atom<CategoryEnum>({
  key: "category",
  default: CategoryEnum.TO_DO,
});
export const TodoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(TodosAtom);
    const category = get(CategoryAtom);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
