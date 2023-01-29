/**
 *  通过tuple，keyof实现类型的值
 *  keyof获取ts类型对象联合的key（union）
 */

// type ValueOf<Object> = Object[keyof Object]
// type a = ValueOf<{name:string,age:20}>

/**
 * 1. 获取数组、元组中的所有类型
 * */

// type Append<Tuple extends Array<any>,element> = [...Tuple,element]
// type a = Append<[1,2,false], true>

/*
 * 2. 把tuple的length+1
 * 使用展开运算符进行添加元素，因为是类型不能直接+1
 * */
// type Length<tuple extends any[]> = [...tuple,true]['length']
// type a = Length<[1,2]>

/**
 * 3. 将元组转为数组
 * */
// type GetArray<Tuple extends any[]> = Array<Tuple[number]>
// type a = GetArray<[1,2,true]>

/**
 * 类型if...else语句
 * 元组判断是一一对应的
 * extends关键字前者是否为后者的子级
 * extends在做类型约束时，如果前者不是后者的子级将直接抛出错误
 *
 * 1.判断是否输入为数组
 * 2.判断key是否存在于Object
 * */
// type isNumber<T> = T extends number? true :false
// type isNumber<T,K> = [T,K] extends [number,number] ? true :false
// type isNumber<T extends  boolean> =T extends number? true :false
// type a = isNumber<2>
// type isArray<T> = T extends any[]? true :false
// type a  = isArray<[1]>


// type GetProp<Object,Key> = Key extends keyof Object ? Object[Key] : undefined
// type a = GetProp<{a:1},'a'>


/**
 * 解构赋值 使用infer收集
 * */

// type Params<F> = F extends (...params: infer P) => any ? P : undefined
// type a = Params<{name:'1',age:2}>

// 获取数组的值
// type GetFirst<T> = T extends [infer First,...any] ? First : undefined
// type GetFirst<T> = T extends [infer First,...infer Reset] ? Reset: undefined
// type a = GetFirst<[1,3,5]>

// 使用infer类型赋值

type Copy<T> = T extends infer P ? P : any
type a = Copy<{ name: string }>
