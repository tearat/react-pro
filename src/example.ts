// Напиши тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

type Concat = (a: string, b: string) => string

const concat: Concat = (a: string, b: string) => `${a} ${b}`


// Напиши интерфейс для описания следующих данных
// const MyHometask = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

interface Task {
    howIDoIt: string,
    simeArray: Array<string|number>,
    withData?: Array<Task>
}

const myHometask: Task = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// В уроке про Generics мы написали интерфейс массива MyArray...
// Добавь типизацию для метода reduce

interface ReducableArray<T> {
	[n: number]: T;

    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U, initialValue: U): U;
}

const reduceMeSenpai: ReducableArray<number> = [1, 2, 3]

const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

const summ: number = reduceMeSenpai.reduce(reducer, 4)


// Дальше мы будем разбирать, как работать с React компонентами в TS.
// Но ты можешь уже сейчас  переписать на TypeScript два файла index.js и App.js, используя соответсвующую типизацию.

export { concat, myHometask, summ }
