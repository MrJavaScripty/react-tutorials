# The Button Component

This is a custom button component we've made which isolates the styles and functionality of a button.

## JSDoc Comments

The JSDoc comments are used by VSCode to provide intellisense for the component.

## The `@param` directive

The @param directive is used to describe the parameters of a function or component.
In this case, we are using it to describe the props that are passed to the component.

```js
@param {ComponentProps<"button"> & {fullWidth: boolean}} props
```

Our param directive is a bit complicated because we are using a union type.

A union type is a type that can be one of many types.
In this case, we are using the `&` operator to combine two types into one.

It says that the props should be of type `ComponentProps<"button">` AND `{fullWidth: boolean}`.

The `ComponentProps<T>` type is a built-in type that is used to get the props of a component (in this case, the `button` element).
Additionally, we are adding a custom prop called `fullWidth` which is a `boolean`.


## The Spread Operator (`...`)

The `...` operator is called the spread operator. It takes all the properties of the object and spreads them out.
In this case, we are spreading out all the props that are passed to the button component.

```js
const x = { firstName: "Ryan", lastName: "Kuruppu" }

const y = {...x} 

console.log(y) // { firstName: "Ryan", lastName: "Kuruppu" }
```

This means that we can pass any __allowed__ prop to our custom `Button` component and it will be passed to the button element.


### The className

Why are we using `className` instead of `class`?

The `class` attribute is a reserved keyword in JavaScript used for ES6 classes (just like we use `class` in Java in your OOP module). So, we use `className` instead. This is a React thing.

## The `children` prop

The `children` prop is a special prop that is passed to every component. It is used to render the children of a component.

```js
const Button = ({children, ...props}) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}
```

In this case, we are rendering the children of the button element.

So your JSX would look like this:

```jsx
<Button>
  Hello World
</Button>
```

And what gets rendered to the DOM is this:

```html
<button>Hello World</button>
```

## The `{...props}` spread operator

We are using the spread operator to spread out all the props that are passed to the button component.

```js
const Button = ({children, ...props}) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}
```

This means that we can pass any __allowed__ prop to our custom `Button` component and it will be passed to the button element.

```jsx
<Button className="my-button" onClick={() => console.log("Hello World")}>
  Hello World
</Button>

// Renders to (still a React element)

<button className="my-button" onClick={() => console.log("Hello World")}>
  Hello World
</button>
```


