/* _____________ Your Code Here _____________
* 下面as const 将传入的东西变为 只读 readonly 所以在做约束的时候也要 readonly
* */

type Length<T extends readonly any[]> = T["length"]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    // @ts-expect-error
    Length<5>,
    // @ts-expect-error
    Length<'hello world'>,
]