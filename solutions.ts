// problem-1 
type ArrayNumber = number[];

const filterEvenNumbers = (numbers: ArrayNumber): ArrayNumber => {
    const result = numbers.filter((number) => number % 2 === 0);
    return result;
}

const numbers: ArrayNumber = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(numbers);

// problem-2
type Word = string;

const reverseString = (text: Word): Word => {
    const result = text.split("").reverse().join("");
    return result;
}

const word: Word = "typescript";
const result2 = reverseString(word);
// console.log(result2);

// problem-3
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
    if (typeof value === "string") {
        return "String";
    } else if (typeof value === "number") {
        return "Number";
    } else {
        return "unknown";
    }
}

const result3 = checkType(1010);
// console.log(result3);

// problem 4
type User = {
    id: number;
    name: string;
    age: number;
};

type KeyOfUser = keyof User;

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

const user: User = {
    id: 1,
    name: "John Doe",
    age: 25,
};

const result4 = getProperty(user, "name");
// console.log(result4);

// problem-5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    const res = {
        ...book,
        isRead: true,
    }
    return res;
}
const myBook: Book = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
const result5 = toggleReadStatus(myBook);
// console.log(result5);

// problem-6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
const result6 = student.getDetails();
// console.log(result6);

// problem-7
type Array_Number = number [];

const getIntersection = (arr1: Array_Number, arr2: Array_Number): Array_Number => {
    const result = arr1.filter((num) => arr2.includes(num));
    return result;
}

const result7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
// console.log(result7);