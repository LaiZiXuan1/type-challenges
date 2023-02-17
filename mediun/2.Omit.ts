/* _____________ 你的代码 _____________
  类型重映射： 在我们遍历可迭代对象的时候，进行过滤 使用 as进行判断

  1. 首先使用key in keyof T 获取interface中的key
  2. 应用类型重映射 使用 as 判断 key是否在 K里面 如果是在key传来的，就返回never不进行返回
  3，类型直接使用T[key] 取出来
*/

type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '../utils';

type cases = [Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>, Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>];

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
