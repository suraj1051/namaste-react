# JSX React
- Its not html inside javascript. JSX is html like javascript syntax(XML).

# why you use jsx to write code ?
- a: because it is easy to write and understand. It is also easier to debug.

# question: Why do we need to use React.createElement when we have JSX?
- Answer: JSX is not understood by browsers, it needs to be converted into React.createElement calls which then create React Elements that can be rendered to the DOM.

# How does JSX get converted to React.createElement calls?
- JSX is transpiled by tools like Babel into React.createElement calls. For example, the JSX <h1 id="heading">Hello World from React</h1> gets transpiled to React.createElement('h1', { id: 'heading' }, 'Hello World from React').
- Babel is javscript compiler.

# React Component
- Everything in react is a Component.
- two types of components
- 1.class based components 2.Functional based Componenets
- React Functional component is normal javascript function that returns jsx code/ React element.

# What is Component composition 
- Composite two component inside one composition.




