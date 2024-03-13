https://www.youtube.com/watch?v=HajQX22fmhA&list=PL82C6-O4XrHdf0LMDVl1Y-4_BFbNmdrGc&index=1
It is very enterprise
Made by google
Used to be called Angular Js
Changed to Angular after shifting over to typescript

________________________Opinionated
Yes, Angular is considered opinionated. An opinionated framework imposes certain conventions, guidelines, and patterns on developers, often providing built-in solutions and enforcing specific ways of doing things. Angular, developed by Google, follows the opinionated approach by providing a structured and comprehensive framework with a set of conventions and best practices. It encourages developers to follow the Angular way of building applications, including the use of TypeScript, component-based architecture, dependency injection, and reactive programming with RxJS.

Angular's opinionated nature offers several benefits, such as improved consistency, maintainability, and scalability of codebases. However, it also means that developers need to adhere to Angular's conventions and may have less flexibility in certain aspects compared to more flexible, less opinionated frameworks.




_________________________Repository Pattern
The Repository Pattern is a design pattern commonly used in software development to abstract the data access layer from the rest of the application. It provides a way to centralize data access logic and hide the details of how data is retrieved and stored.

In this pattern, a repository acts as a middleman between the domain/business logic of an application and the data source (such as a database, web service, or external API). It provides a set of methods or interfaces for performing CRUD (Create, Read, Update, Delete) operations on data entities.

Key features of the Repository Pattern include:

Abstraction: Repositories abstract away the details of data access, allowing the application to work with objects rather than database queries or API calls directly.

Encapsulation: Repositories encapsulate the logic for data access, providing a single, consistent interface for accessing data regardless of the underlying data storage mechanism.

Separation of Concerns: By separating data access logic from the rest of the application, the Repository Pattern helps maintain a clear separation of concerns and promotes modular, maintainable code.

Decoupling: The use of repositories reduces coupling between the domain/business logic and the data access layer, making it easier to change or replace the data source without affecting other parts of the application.

Testability: Repositories can be easily mocked or stubbed in unit tests, allowing developers to test the domain logic in isolation from the data access logic.

Overall, the Repository Pattern helps improve code organization, maintainability, and testability by providing a structured way to interact with data sources in an application.
 

Best Practices For Building Angular Apps

Build more on this readme.md, when you learn more about angular, bring the conent here
Angular Interview Questions
CRUD app with Angular


_______________Object oriented programming
Classes, Objects, Interfaces, Inheritance, Encapsulations

_______________Type Script As a programming Language
_______________Angular Life Cycle




____________Architecture
Modules
    -Group code together
    -Lazy loading
    -For building features
    /app/Dashboard

Components
    -Similar to react components
    -For UI's
    -Reusability
    -one way data flow
    -imutable state

    Basic Structure of Angular Components

Directives
    -Structural if statements <p*ngif==true/>
    -Attributes ngModel
    -Tapping into the lower parts of the DOM

Router
    -Is built in 
    -Authorization for your web pages

Pipes
    -transforming data
    e.g turning ISO dates into something more readable

Services
    -Incharge of API calls
    -Dependency Injections
    -Makes angular great
    -Follows a repository pattern  like .Net, Java


__________Installation
npm install -g @angular/cli
install typescript too

__________Creating a new app
ng new my-app



______________String Interpolations {{}} - for variables
Putting a number or a string inside two curly braces and then they get displayed on the web page
Displaying variables on the screen 


String interpolation is a technique used in programming languages to embed variables or expressions directly within string literals. It allows developers to create dynamic strings by inserting the values of variables or the results of expressions into predefined string templates.

The syntax for string interpolation varies depending on the programming language, but it typically involves using special markers or placeholders inside the string to indicate where the variable or expression should be inserted. When the string is evaluated or rendered, these markers are replaced with the corresponding values.

For example, in Python, string interpolation can be achieved using the f-string syntax:


name = "John"
age = 30
message = f"My name is {name} and I am {age} years old."
print(message)  # Output: "My name is John and I am 30 years old."
In JavaScript, string interpolation can be achieved using template literals:

const name = "John";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);  // Output: "My name is John and I am 30 years old."
String interpolation is a powerful feature that makes it easier to create readable and maintainable code by reducing the need for manual string concatenation and formatting. It is commonly used in tasks such as generating dynamic messages, constructing URLs, formatting output, and building complex strings with embedded variables or expressions.
 


____________Property Binding  - for properties/attributes [ ]
The brackets are a form of type checking
Property binding is a feature commonly found in web development frameworks such as Angular, React, and Vue.js. It allows you to set the value of an HTML element attribute or property dynamically based on a value in the component's data or state.

In Angular, property binding is typically used to bind data from the component class to HTML element properties or attributes. It uses square brackets ([ ]) to indicate that the value being assigned to the property is dynamically bound.

For example, consider an Angular component with a property named pageTitle:

    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    template: `
        <h1>{{ pageTitle }}</h1>
    `
    })
    export class AppComponent {
    pageTitle = 'Welcome to Angular!';
    }

In addition to string interpolation, property binding can be used to bind properties or attributes of HTML elements directly. For example:

    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    template: `
        <img [src]="imageUrl" [alt]="imageAlt">
    `
    })
    export class AppComponent {
    imageUrl = 'https://example.com/image.jpg';
    imageAlt = 'Example Image';
    }



___________Two way binding [()] - banana  box'
[] - property binding
() - events binding
Listens for DOM element change
Building robust and complex forms with all types of validations
Prepolutated forms, Updating forms

Same as states in react

ngModel
    -Provides the bindings
    -Validations
    -behind the scenes
    -only works on inouts

Two-way binding is a feature commonly used in web development frameworks like Angular, Vue.js, and React. It allows synchronization of data between the component class (or state) and the user interface (UI) elements. With two-way binding, changes made to the UI elements by the user are automatically reflected in the component's data, and vice versa.

In Angular, two-way binding is achieved using the ngModel directive. It combines property binding and event binding to achieve data synchronization between the component class and the UI.

Here's an example of two-way binding in Angular:
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-example',
    template: `
        <input [(ngModel)]="name" placeholder="Enter your name">
        <p>Hello, {{ name }}!</p>
    `
    })
    export class ExampleComponent {
    name: string = ''; // Initial value for the name property
    }
In this example, we have an <input> element with [(ngModel)]="name". This syntax sets up two-way binding for the name property of the component class. When the user types in the input field, the name property is automatically updated to reflect the changes. Similarly, if the value of the name property in the component class changes, it will be reflected in the input field.

Two-way binding simplifies the process of managing user input and updating the UI accordingly, making it a powerful tool for building interactive web applications. However, it's important to use it judiciously, as excessive use of two-way binding can lead to complex data flow and make code harder to understand and maintain.