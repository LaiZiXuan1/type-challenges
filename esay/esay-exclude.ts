/* _____________ Your Code Here _____________
*
* 这题没懂
*  */

type MyExclude<T, U> = T extends U ? never : T
type a = MyExclude<[1,2,3], string>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '../utils'

type cases = [
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
    Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
    Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]