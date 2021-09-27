# Pure-framework
Pure-framework is a SPA frontend framework that uses TypeScript functions instead of HTML or JSX for view layer.

<a href="https://www.npmjs.com/pure-framework">
    <img src="https://img.shields.io/npm/v/pure-framework.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="pure-framework on npm" />
</a>&nbsp;



## Why TypeScript?
JSX and Angular or Vue template languages are great because of their similarity with
HTML, but that brings all the issues of HTML with it. Pure-framework, on the other hand, doesn't use HTML at all! Only TypeScript functions!

With TypeScript you get better syntax highlighting, better refactoring tools, and overall, better experiance coding.
### Component Example
Template in pure-framework:
```typescript
div({ class: ’app-root’}, [
  span(‘Hello ${this.state.name}! Welcome!‘)
]);
```

Equivalent template in Angular:
```HTML
<div class="app-root">
  <span> Hello {{state.name}}! Welcome!</span>
</div>
```

## Master's Thesis
This framework is developed as a part of a Master's thesis on Mathematical Faculty at the University of Belgrade.
Pure-framework is a frontend framework designed around concepts of functional programming and custom Redux-like state management system.
The basic principles that this framework leverages are:
  - Pure functions
  - Memoization
  - Observables (RxJs)
  - Type safety (TypeScript)

Check out an example of the app writen using *pure-framework* on this [repo](https://github.com/maleksandar/pure-framework-todo-app), or the [presentation](https://docs.google.com/presentation/d/e/2PACX-1vTARP-LlG3lQDed_w9IeUhgPtGn_iOP4itjJ7AlhTIlSRfcdnxYUN_ZWkUrtk5SdUfQjK5HkzK4ibhn/pub?start=false&loop=false&delayms=3000) about pure-framework (Serbian).


## License
MIT License

Copyright (c) 2021 Aleksandar Milosavljević

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



