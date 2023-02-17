/* _____________ Your Code Here _____________
* as const 类型断言把 string[]类型 转为了 readonly 的 元组类型
* T[number]拿出元组或者组合类型所有值
* 遍历元组字面量的特定语法
* */

type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const tupleMix = [1, "2", 3, "4"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>
  >
];

type error = TupleToObject<[[1, 2], {}]>;
