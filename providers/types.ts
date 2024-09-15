export type SliceFun<T extends {} = {}> = (set: (data: Partial<T>) => void, get: () => T, init?: Partial<T>) => T
