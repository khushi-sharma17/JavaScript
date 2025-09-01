# JavaScript

## how many datatypes are there in javascript ?


JavaScript has **8 data types** — divided into **7 primitive types** and **1 non-primitive (complex) type**.

---

### ✅ **Primitive Data Types (Immutable)**

These are basic, immutable values:

1. **`String`**
   Represents textual data.
   Example: `"hello"`, `'world'`

2. **`Number`**
   Represents both integers and floating-point numbers.
   Example: `42`, `3.14`

3. **`BigInt`** (ES2020)
   Used for very large integers beyond the `Number` limit.
   Example: `1234567890123456789012345678901234567890n`

4. **`Boolean`**
   Represents logical values.
   Values: `true`, `false`

5. **`undefined`**
   A variable that has been declared but not assigned a value.
   Example:

   ```js
   let a;
   console.log(a); // undefined
   ```

6. **`null`**
   Represents the intentional absence of any object value.
   Example: `let user = null;`

7. **`Symbol`** (ES6)
   A unique and immutable identifier, often used as object property keys.
   Example:

   ```js
   let sym = Symbol("id");
   ```

---

### ✅ **Non-Primitive Data Type (Mutable)**

8. **`Object`**
   Used to store collections of data and more complex entities.
   Includes: `Object`, `Array`, `Function`, `Date`, etc.
   Example:

   ```js
   let obj = { name: "Alice", age: 25 };
   let arr = [1, 2, 3];
   ```

---

### Summary Table

| Data Type | Primitive | Example                    |
| --------- | --------- | -------------------------- |
| String    | ✅         | `"text"`                   |
| Number    | ✅         | `123`                      |
| BigInt    | ✅         | `123n`                     |
| Boolean   | ✅         | `true`                     |
| undefined | ✅         | `undefined`                |
| null      | ✅         | `null`                     |
| Symbol    | ✅         | `Symbol("id")`             |
| Object    | ❌         | `{}`, `[]`, `function(){}` |


























## is javascript a compiler or interpreter language ?

JavaScript is **both interpreted and compiled** — it's a **hybrid language**.

---

### 🧠 Here’s the breakdown:

#### ✅ Originally:

JavaScript was considered an **interpreted language** — the browser would **read and execute it line by line** using an interpreter.

#### 🔄 Now (Modern JavaScript Engines like V8, SpiderMonkey, Chakra):

JavaScript is processed by a **Just-In-Time (JIT) compiler**, which means:

* It **parses and compiles** parts of your code **on the fly (at runtime)**.
* It combines the benefits of both **interpreters** (fast startup) and **compilers** (faster execution over time).

---

### ⚙️ What Actually Happens:

1. **Parsing**: Your JavaScript code is parsed into an Abstract Syntax Tree (AST).
2. **Interpreting**: The code is initially interpreted to run quickly.
3. **Profiling**: The engine identifies frequently used code (“hot code”).
4. **Compiling (JIT)**: That hot code is compiled into **machine code** for faster performance.

This whole process is done by engines like:

* **V8** (used in Chrome and Node.js)
* **SpiderMonkey** (Firefox)
* **JavaScriptCore** (Safari)

---

### 📌 So is JavaScript compiled or interpreted?

| Term                             | Answer           |
| -------------------------------- | ---------------- |
| **Interpreted?**                 | ✅ Yes, initially |
| **Compiled?**                    | ✅ Yes, via JIT   |
| **Static Compilation like C++?** | ❌ No             |

---

### ✅ Final Answer:

> JavaScript is **not strictly interpreted or compiled** — it's a **JIT-compiled language** that starts off being interpreted and is optimized through compilation at runtime.

---
