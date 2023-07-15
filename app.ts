// TYPESCRIPT IN PRIMITIVE DATA TYPES

// if ther is no literal/value assign to a variable then typscript will implicity presume it is as "any" type
// ANY TYPE
let variable;
variable = "string";
variable = 21;
variable = true;

let variable1: any;
variable1 = "string";
variable1 = 21;
variable1 = true;

let variableArrayAny: any[] = [1, "archan", true, {}];

// EXPLICITLY providing a type
// STRING TYPE
let ageWithType: string;
// ageWithType = 23 ❌
ageWithType = "string";

// NUMBER TYPE
// Can also be initialize the variable with default value and explicity give type
let ageWithType2: number = 324;
// ageWithType2 = "asd"; ❌
ageWithType2 = 78;

// BOOLEAN TYPE
let testBoolean: boolean;

// testBoolean = 7 ❌
// testBoolean = "sad" ❌
testBoolean = false;

// muliple types (union types in primitive data type)
let testStringOrNumber: string | number;
// testStringOrNumber= true ❌
// testStringOrNumber= {} ❌
testStringOrNumber = "string";
testStringOrNumber = 35;

// TYPESCRIPT IN NON PRIMITVE DATA TYPES

// ARRAYS

// implicity checking the values and typescript auto assign the type. here is string
let testNameArray = ["archan", "bhatta"];
// testNameArray.push(34) ❌
// testNameArray.push(true) ❌
testNameArray.push("ace");

// implicity checking the values and typescript auto assign the type. here is string and number
let testNumberArray = [1, 2, 3, "sdf"];
testNumberArray.push("sasad");
testNumberArray.push(32);
// testNumberArray.push(true) ❌

// explicityly giving the type to an array
let testNameArray1: string[] = ["archan", "bhatta"];
testNameArray1.push("ace");
// testNameArray1.push(true) ❌
// testNameArray1.push(234)  ❌

// multiple type (union type in array)
// let testStringOrNumberInArray: (string | boolean)[]= ["archan", 34, "bhatta", false] ❌
let testStringOrNumberInArray: (string | number)[] = ["archan", 34, "bhatta"];
testStringOrNumberInArray.push("ace");
testStringOrNumberInArray.push(88);
// testStringOrNumberInArray.push(true) ❌

// OBJECTS

// implicitly
let user = {
  name: "archan",
  age: 25,
  isAdmin: true,
};

user.name = "bhatta";
// user.name = 234 ❌
// user.age = false ❌
// user.isAdmin = "sad" ❌
user.isAdmin = false;
// only the key that is defined can be used later on
// user.phone = "123456789" ❌

// explicitly
let user1: {
  name: string;
  age: number;
  isAdmin: boolean;
  // if you want to use something that is optional parameter such as phone number "?"
  phone?: string;
};

user1 = {
  name: "archan",
  age: 25,
  isAdmin: true,
  phone: "123456789",
};

user1 = {
  name: "archan",
  age: 25,
  isAdmin: true,
};

// FUNCTIONS

// by default it will be VOID
let saySomething = () => {
  console.log("Hello world");
};

// saySomething = "sad" ❌ cannot assign string in "VOID" type
// if want to return something then explicity define the type of return value

let saySomethingReturnNumber = (): number => {
  return 12 * 34;
};

saySomethingReturnNumber();

// here (): string is expecting string to be return but parameter a type is "Any" implicitly
let saySomethingReturnString = (a): string => {
  return a;
};

saySomethingReturnString("asd");

// explicitly defaining the type of parameter
let saySomethingReturnString2 = (a: string): string => {
  return a;
};

saySomethingReturnString2("asd");

// let saySomethingReturnString3 = (a:number): string => { ❌
//   return a;❌
// };❌
// saySomethingReturnString3("asd");❌

// void as explicit type for function will not accept returning value
let something = (num: number): void => {
  // return num * 3; ❌
  console.log("anything but dont return if using void");
};
let mul = something(5);
console.log(mul);

// case

let funct = (user: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
}) => {
  console.log(user.name);
  let yourNumber: number = user.age;
  return yourNumber;
};

let yourNumberReturn = funct({ name: "archan", age: 23, isAdmin: true });
// funct({ name: "archan", age: 23, isAdmin: true, phone: "sdjvfn34r" });
console.log(yourNumberReturn);

// JUST IMAGNINE: you have more than 3 4 parameter in your function.
// it is hard to explicitly defaine them in function parameter so to alter this problem we have TYPES, INTERFACES or even GENERICS

// TYPES ALIASES
// we can create a custom type and use it in a parameter

type userType = {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

let yourNumberReturnBetterFunction = (user: userType) => {
  console.log(user.name);
};

// FUNCTION SIGNATURE IN TYPE
// we can create prototype of function and from that prototype we can create different function
type myFunctionSignature = (a: string, b: number, c?: boolean) => void;
// lets use this prototype of a function in another appropriate function
let writeFunction: myFunctionSignature = (abc, def) => {
  console.log(abc + " muji " + def);
};
writeFunction("archan", 34, true);
// we can create different function but can use same signature

// OPTIONS IN TYPE
// we can not select other choice other than whatever is defined
// generally used for objects

type optionFunction = {
  name: string;
  age: number;
  phone?: string;
  theme: "dark" | "white";
};

let optionWithTheme: optionFunction = {
  name: "archan",
  age: 32,
  theme: "dark",
  // theme: "pink" ❌
};

// INTERFACES

// interface is just like type but it is advanced version

interface IUser {
  name: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  empId: number;
}

const employee: IEmployee = {
  name: "archan",
  email: "archanme1@gmail.com",
  age: 25,
  empId: 1,
};

const userClient: IUser = {
  name: "bhatta",
  email: "bhatta@gmail.com",
  age: 24,
};

// dont be confuse with employee and types. usecases may be different but
// use interface whenever you want to extends the type from other interface

// GENERICS

interface IAuthor {
  id: number;
  name: string;
}
interface ITitle {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  bookTitle: string;
  desc: string;
  extra: IAuthor[] | ITitle[];
}

// lets suppose we have many interface or string or number or objects in exxtra
// it is troublesome to create each interface again and again like the given example above
// in this case GENERICS is helpful

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testingGenerics: IPostBetter<string> = {
  id: 1,
  title: "sakdn",
  desc: "ksdjb skdjfn",
  extra: ["bike"],
  //   extra: ["bike", 32], ❌
};

const testingGenerics2: IPostBetter<any> = {
  id: 1,
  title: "sakdn",
  desc: "ksdjb skdjfn",
  extra: ["bike", 234, {}, true],
};

// we ccan create limitation for generics
// which data types can only be allowed kinda thing

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testingGenerics3: IPostBetter<{ id: number; name: string }> = {
  id: 1,
  title: "sakdn",
  desc: "ksdjb skdjfn",
  extra: [{ id: 2, name: "sad" }],
};

// can allow transform testingGenerics3 static typed generics into interface
const testingGenerics4: IPostBetter<IAuthor> = {
  id: 1,
  title: "sakdn",
  desc: "ksdjb skdjfn",
  extra: [{ id: 2, name: "sad" }],
};

// using interface IAuthor again
const testingGenerics5: IPostEvenBetter<ITitle> = {
  id: 1,
  title: "sakdn",
  desc: "ksdjb skdjfn",
  // extra: [{ id: 2, name: "sad" }], ❌
  extra: [{ id: 2, title: "sad" }],
};
