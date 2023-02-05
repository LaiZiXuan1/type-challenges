/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/* _____________ Your Code Here _____________
* 1、因为 K 是从 T 中取出来的所以先用extends限制 K 的类型
* 2、in关键字是生成映射类型直接 k是传入的联合类型可以直接取出来他的值
* 3、T[key]就是直接拿出来类型的值
* */

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};
