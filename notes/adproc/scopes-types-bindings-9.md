# Names, Bindings and Scopes - ADPROC 9

## Variables
Using the following example variables:
- `var foo = 6`
- `int bar`

Have 6 values:
1. Name
	- How the var is identified; `foo` and `bar`
2. Address
	- The address in memory that the variable is stored.
	- Also known as pointer location or *l-value*
3. Value
	- `foo` has a value `6`. `bar` has a value `undefined`
	- This is the contents of the memory that the variable occupies.
	- Also known as *r-value*
4. Type
	- Both `foo` and `bar` are `int` types
5. Life time
	- The time durig which the bar is bound to a specific location in mem
6. Scope
	- The blocks in which the variable is accessible in. More on this later.

## Declarations
Declaraion of a variable may be Explicit or Implicit.

### Explicit
Defining the actual type of a variable:
```java
private int foo;
```

### Implicit
The compiler/interpreter assumed the type. In FORTRAN, is does this by checking the first letter of the variable name (i,j,k are often used in mathematics, therefore it may be int)
This happens in weakly typed languages:
```javascript
let foo = 3
typeof foo
// 'number'
foo = 'a'
typeof foo
// 'string'
```
is allowed. This is know as *type interference*.
**note:** when `foo` is defined, javascript implicitly types `foo`: it guesses that we want `foo` to hold a number and not a string. The definition *implies* that `foo` is a `number`.

## Binding
A binding is an association between an entity and an attribute:
- Between a variable and its type;
- Between a variable and its value;
- Between a variable and its memory location;
- Between a symbol and an operation.

### Binding Time
It is easy to understand that *binding time* is the time at which a binding takes place. This is important to note.
Take the following Java as an example:
```java
foo = foo + 5;
```
- The *type* of foo is bound at time of compilation;
- The range of the possible values of `foo` is bound at the *time of the design of the compiler*;
- The operation of `+` is bound at compile time, when its operands have been determined;
- The *final value* of `count` if bound at time of execution - *runtime*.

### Type Binding
If the type of a variable is set at runtime, and remains unchanged, it is said to be static
	- From this, we can understand that *Strongly Typed* variables have their types *statically bound*
However, if it may change during runtime, it is said to be *dynamic*
	- We can gather that a *Weakly Typed* programming languages binds its variables *dynamically*.
	- This allows for greater flexibility, but it's costly for the compiler - as it has to determine the type every time it uses a variable. Type error are also common.

## Scope and Blocks

### Blocks
A block in a program is a section of code, with start and end markers. A in JavaScript, a block may be a function - with the block denoted by braces.
```javascript
function foo() {
	let a;
	// main block
	function bar() {
		let b;
		//another block
	}
	function baz() {
		let c;
		// a different block, in the main block
	}
}
```
### Scope
The availability of a variable in a block must now be considered. This availability may be referred to as *'scope'*.
Looking at the previously defined function `foo()`, we can see that `a` is in the main block - operations in `bar()` and `bar()` can access this. However, because `b` is defined in a nested block, `bar()`, `foo()` and `baz()` can not access this. This is known as the *Visibility Rule*

### Visibility Rule
A declaration in an inner block hides the declaration of from the outer block. See the code below for an eloquent description.
```javascript
function foo() {
	let a = 2;
	function bar() {
		let a = 3;
		console.log(a); //3
	}
}
```

### Dynamic vs Static Scoping
Dynamic and Static scoping are difficult to get around at first, but there's essentially a key idea behind it. Take the following code snippet:
```javascript
function foo() {
	let a=3;
	function bar() {
		let a=2;
		baz();
	}
	function baz() {
		console.log(a);
	}
}
```

#### Statically Scoped Langs.
A block will only have access to the variables within its own block, and its parent's block. In the code above, when static scoping is applied, 3 will be printed to the console.

#### Dynamically Scoped Langs.
This is similar to a statically scoped language, but a block also has access to the variabled in the block in which it is called. In the example above, because `baz()` is called from `bar()`, it has access to the variable in `bar()`. The *visibility rule* mentioned earlier shows this.

As you've guessed, the output is 2.
