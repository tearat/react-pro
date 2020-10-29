// 02.01

let tsString: string = 'string'

tsString = "gf"

let tsSum = (arr: number[]) => arr.reduce((a: number, b: number) => a + b)

const tsArr: number[] = [1,2,3]

type TsArr = (number | string)

const tsArr2: TsArr[] = [1,2]
const tsArr3: Array<TsArr> = [1,23]

const nextArr: [string, number] = ['1', 2]


// 02.02

type TsObj = {
    name: string,
    birthday: number | string,
    male?: boolean,
    lastname: string
}

interface Person {
    readonly name: string,
    birthday: number | string,
    male?: boolean,
    lastname: string
}

const tsObj: Person = {
    name: 'Zar',
    birthday: 24,
    lastname: 'Zakharov'
}

// 02.03

interface IndexInterface {
    [n: string]: string
}

const data: IndexInterface = {
    key1: "sfgdf",
    key2: "sfgdfdfg",
}

const val3 = data.key3

// 02.04

// calculate('add', 2, 3) => 5

enum Operators {
    add, sub
}

function calculate(method: Operators, first: number, second: number): number {
    switch(method) {
        case Operators.add: return first + second
        case Operators.sub: return first - second
    }
}


type TypeFn = () => number

const ArrowFunc: TypeFn = () => 2

// 02.05

function identity<T>(value: T): T {
    return value
}

identity(1)
identity("sdf")

//

interface MyArray<T> {
    [n: number]: T;

    map<U>(fn: (el: T) => U): U[];
}

const tsArr22: MyArray<number> = [1,2,3]

tsArr22.map(i => i + 1)
// tsArr22.map(i => 'i + 1')


function getLen1<T extends Array<any>>(arr: T): number {
    return arr.length
}

function getLen2(arr: Array<any>): number {
    return arr.length
}

const arr01: Array<number> = [1,2,3]
getLen1(arr01)
getLen2(arr01)
