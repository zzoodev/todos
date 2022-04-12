import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: string;
}

export const TodosAtom = atom<ITodo[]>({
  key: "todos",
  default: [],
});
export const CategoryAtom = atom<string>({
  key: "category",
  default: "todo",
});

export const AllCategoryAtom = atom<string[]>({
  key: "allCategory",
  default: ["todo", "doing", "done"],
});

export const TodoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(TodosAtom);
    const category = get(CategoryAtom);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
