/* _____________ Your Code Here _____________
  使用infer收集他的参数，T是一个函数就返回他的参数，否则就返回undefined
*/

type MyParameters<T> = T extends (...Params: infer P) => any ? P : undefined;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils';

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type cases = [Expect<Equal<MyParameters<typeof foo>, [string, number]>>, Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>, Expect<Equal<MyParameters<typeof baz>, []>>];
