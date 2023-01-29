/**
 *  通过tuple，keyof实现类型的值
 *  keyof获取ts类型对象联合的key（union）
 *
 */


type ValueOf<Object> = Object[keyof Object]

type a = ValueOf<{name:string,age:20}>
