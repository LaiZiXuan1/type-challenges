/* _____________ Your Code Here _____________
* 这题是取出promise中的带的值，promise可以嵌套promise所以用到了递归
* 1、首先是要拿到 promise中的东西使用 infer 收集
* 2、在进行判断 promise中的东西是否是 promise, 如果是进行递归
* 3、如果不是就返回 K
*
* ==>==>==>==>==>==>重点
* 第5个示例，使用Promise依然报错
* Promise还有一个类型是PromiseLike。
* PromiseLike中包含一个then方法
* then 接收两个参数
* 1、onfulfilled 是 promise 被解析是的回调
* 2、onrejected 是 promise 被拒绝时的回调
* */

type MyAwaited<T> = T extends PromiseLike<infer K>
  ? K extends Promise<any>
    ? MyAwaited<K>
    : K
  : undefined;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];

type error = MyAwaited<number>;
