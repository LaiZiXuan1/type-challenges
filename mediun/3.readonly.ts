/*
  知识点： intersection types
  _____________ Your Code Here _____________
  1. 限制 K 的值，并赋默认值,
  2. 把传来的类型的 key全部转为readonly 使用 & 符进行联合，
  3. 结合上一题 Omit过滤传来的 联合类型
  没完全懂
*/

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T]: T[P];
} & {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '../utils';

type cases = [Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>, Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>, Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>];

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>;

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
