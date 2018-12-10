# styled-components-workshop
Styled-components workshop for GSG community
# :nail_care:
## Stage-0 (Setting up :construction:)
In this stage we will setting up the core files for the workshop.
```bash
cd stage-0
npm i
npm start
```
## stage-1 (The old school :older_man:)
In this stage we will build a simple `To Do` React app with ordinary css style.
you can find the source code [here](https://github.com/christiannwamba/scotch-react-todo).
```bash
cd stage-1
npm i
npm start
```
- we have created a `ToDoApp` directory inside `stage-1/src/` with `index.js` and `ToDoApp.css` files.
- we used `BEM` styling convention.

## stage-2 (switch to styled-components :nail_care:)
In this stage we will switch to `styled-components`.
```bash
cd stage-2
npm i
npm install styled-components
npm start
```
- Create `StyledComponents.js` file.
  In `StyledComponents.js` add `import styled from 'styled-components';`.
- Create new components using `styled-components` with same style in `ToDoApp.css`.
  for example:
  ```css
  .to-do-app {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
  }

  .to-do-app__heading--sub{
    color: #61dafb;
    font-size: 20px;
    font-family: 'Bree Serif', serif;
    font-weight: 100;
    margin: 10px auto;
  }
  ```
  would be:
  ```js
  export const ToDoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
  `
  export const SubHeading = styled.h4`
    color: #61dafb;
    font-size: 20px;
    font-family: 'Bree Serif', serif;
    font-weight: 100;
    margin: 10px auto;
  `
  ```
- In `ToDoApp/index.js`
  ```js
  import { ToDoWrapper, SubHeading, ... } from './StyledComponents'
  ```
- Replace the HTML tags with the new components.
  ```HTML
  <div className="to-do-app">
    <h4 className="to-do-app__heading to-do-app__heading--sub">Add your To-Do's here</h4>
  </div>
  ```
  ```HTML
  <ToDoWrapper>
    <SubHeading>Add your To-Dos here</SubHeading>
    ...
  </ToDoWrapper>
  ```
### Looks more prettier? :smirk:
  - Now you can delete `ToDoApp.css` :smiling_imp:

## stage-3 (More modularization :fire:)
In this stage we will try to modularize our code.
```bash
cd stage-3
npm i
npm start
```
- Take a look on `StyledComponents.js` and try to find out similar code lines.
  ```js
  export const Input = styled.input`
    border: solid 1px #60c1da;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    font-weight: 600;
    margin: 0.85em 0;
    padding: 6px 24px;
    text-align: center;
    vertical-align: middle;
    background-color: #fff;
    color: #60c1da;
    outline: none;
  `
  export const AddButton = styled.button`
    border: solid 1px #60c1da;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    font-weight: 600;
    margin: 0.85em 0;
    padding: 6px 24px;
    text-align: center;
    vertical-align: middle;
    background-color: #60c1da;
    outline: none;
  `
  export const DeleteButton = styled.button`
    border: solid 1px #e90c27;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font: inherit;
    font-weight: 600;
    margin: 0.85em 0;
    padding: 6px 24px;
    text-align: center;
    vertical-align: middle;
    background-color: #e90c27;
    outline: none;
  `
  ```
- > To easily make a new component that inherits the styling of another, just wrap it in the styled() constructor.

- Make two extends from `Input` component:
  ```js
  export const AddButton = styled(Input)`
    border: solid 1px #60c1da;
    background-color: #60c1da;
    color: #fff

  `
  export const DeleteButton = styled(Input)`
    border: solid 1px #e90c27;
    background-color: #e90c27;
    color: #fff
  `
  ```
  `AddButton` and `DeleteButton` are instance if `input` html tag! :open_mouth:

  How could i use it as Buttons?
  > If you want to keep all the styling you've applied to a component but just switch out what's being ultimately rendered (be it a different HTML tag or a different custom component), you can use the "as" prop to do this at runtime.

  ```html
    <AddButton type='submit' as="button">
      Add
    </AddButton>
  ```
- for more modularization we can use `props`
  ```js
  // ToDoApp/StyledComponents.js
  export const Button = styled(Input)`
    border: solid 1px #${(props)=> props.delete ? 'e90c27' : '60c1da'};
    background-color: #${(props)=> props.delete ? 'e90c27' : '60c1da'};
    color: #fff
  `
  ```
  ```html
  // ToDoApp/index.js

  // the default button
  <Button type='submit' as="button">
    Add
  </Button>

  //DeleteButton
  <Button as="button" delete>
    Add
  </Button>
  ```
