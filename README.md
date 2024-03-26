https://www.youtube.com/watch?v=HajQX22fmhA&list=PL82C6-O4XrHdf0LMDVl1Y-4_BFbNmdrGc&index=1
It is very enterprise
Made by google
Used to be called Angular Js
Changed to Angular after shifting over to typescript

Decorator pattern
Build your own observeable pattern Angular
Stack Memory
Heap Memory

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
_______________Vanilla Js Refreshers
_______________Lifecycle
ngIniti

______________state
signal




____________Angular Architecture Smart and dumb Components
In Angular development, the concept of "smart" and "dumb" components is often used to organize the architecture of an application, especially in larger projects. These terms refer to different types of components based on their responsibilities and interactions within the application.

Smart Components (Container Components):

Responsibilities: Smart components are responsible for orchestrating the behavior of the application. They often represent pages or major sections of the application.

Interactions: Smart components interact directly with services, fetch data from APIs, manage application state, and pass data down to child components.

Examples: A smart component might be a dashboard component that fetches user data from a service, manages user authentication, and passes user-related data to child components such as profile components or settings components.

Dumb Components (Presentational Components):

Responsibilities: Dumb components are primarily concerned with presenting data and receiving user input. They don't have any knowledge of the application's state or services.

Interactions: Dumb components receive data through input bindings and emit events to notify the parent components about user actions.

Examples: Dumb components include things like buttons, input fields, cards, and other UI elements. They focus on rendering UI elements based on the input they receive and emitting events when user interactions occur.

Using this architecture has several benefits:

Separation of Concerns: Smart components handle business logic and state management, while dumb components focus solely on presentation. This separation makes the codebase easier to understand, maintain, and test.

Reusability: Dumb components are highly reusable since they are not tied to specific data or logic. They can be used in multiple parts of the application without modification.

Scalability: The architecture scales well with the size of the application. As the application grows, it's easier to manage complexity by dividing it into smaller, more manageable pieces.

By following the smart/dumb component architecture, developers can create Angular applications that are more modular, maintainable, and easier to extend or refactor as needed.










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



_________________Template refference variables #
Html elements access
Helps share information with other html elements in the DOM
        <input #phone placeholder="Phone Number"/>
        <button type="button" (click)="callPhone(phone.value)">Call</button>


Template reference variables in Angular allow you to interact with elements in your template from your component class. They provide a way to get access to DOM elements, components, or directives within your template and perform actions such as reading values, modifying properties, or calling methods.

Template reference variables are defined using the hash (#) symbol followed by a name. You can then use this name to reference the element in your component class.

Here's an example of how to use a template reference variable in Angular:
    <!-- app.component.html -->
    <input #nameInput type="text">
    <button (click)="logName()">Log Name</button>

    // app.component.ts
    import { Component, ViewChild, ElementRef } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
        })
        export class AppComponent {
        @ViewChild('nameInput') nameInputRef: ElementRef;

        logName() {
            console.log(this.nameInputRef.nativeElement.value);
        }
    }

    We define a template reference variable #nameInput on the input element.
    We use @ViewChild('nameInput') to query for the input element in the component class.
    When the button is clicked, the logName() method is called, which retrieves the value of the input element using nameInputRef.nativeElement.value and logs it to the console.
    Template reference variables provide a convenient way to work with elements in your template without relying on complex selectors or query methods. They are commonly used for tasks such as handling form inputs, accessing child components, or interacting with DOM elements.




____________ngClass Class binding
Dynamically showing UI components based on boolean values
Class binding in Angular allows you to dynamically add or remove CSS classes to HTML elements based on certain conditions or expressions in your component. You can use class binding to enhance the styling and behavior of your Angular application.

        ____________Regular class binding
        Works well for simple scenarios where you need to apply a single class based on a condition or expression.

        export class MyComponent {
            isSpecial: boolean = true;
        }


        <div [class.my-class]="isSpecial">This div has the 'my-class' class if isSpecial is true</div>
        <div [class.my-class]="isSpecial">This div has the 'my-class' class if isSpecial is true</div>
        <div [class.my-class]="isSpecial ? true : false">This div has the 'my-class' class if isSpecial is true</div>
        <div [class.my-class]="checkSpecial()">This div has the 'my-class' class if checkSpecial() returns true</div>
        
        export class MyComponent {
            isSpecial: boolean = true;

            checkSpecial(): boolean {
                // Some logic to determine whether the class should be applied
                return this.isSpecial && someOtherCondition;
            }
        }


        ____________________ngClass binding
        Uses the ngClass directive followed by an object or string expression to dynamically apply multiple classes.
        Allows for more complex logic and conditions by evaluating expressions in the component.
        Supports adding and removing multiple classes simultaneously based on different conditions.
            <div [ngClass]="{ 'my-class': isSpecial, 'another-class': !isSpecial }">This div has 'my-class' if isSpecial is true, and 'another-class' if isSpecial is false</div>

        With ngClass, you can also pass an object from your component class, which provides even more flexibility:
        <div [ngClass]="classObject">This div has classes determined by the classObject in the component</div>

        export class MyComponent {
            classObject = {
                'my-class': this.isSpecial,
                'another-class': !this.isSpecial
            };
        }



_______________________ngStyle
can be used the same way with the ngClass dynamically

The ngStyle directive in Angular allows you to dynamically apply CSS styles to HTML elements based on expressions in your component. It provides a way to set inline styles directly on elements, giving you flexibility to adjust styles dynamically based on component properties or expressions.

Here's how ngStyle works:
    <div [ngStyle]="{'color': textColor, 'font-size': fontSize + 'px'}">This div has dynamic styles applied</div>
    export class MyComponent {
        textColor: string = 'red';
        fontSize: number = 20;
    }

    You can also dynamically compute the styles based on component logic:
    <div [ngStyle]="computeStyles()">This div has dynamic styles computed from the computeStyles() function</div>

    export class MyComponent {
        computeStyles() {
            return {
            'color': this.isSpecial ? 'red' : 'blue',
            'font-size': this.isSpecial ? '24px' : '16px'
            };
        }
        }



____________________ngIf then else
Conditionally render search results
The ngIf directive in Angular is used to conditionally render or remove elements from the DOM based on the evaluation of an expression. It's a powerful tool for displaying or hiding content dynamically in your Angular templates.

Here's how ngIf works:

Condition Evaluation: The ngIf directive evaluates an expression. If the expression is truthy, the element and its children are rendered in the DOM. If the expression is falsy, the element and its children are removed from the DOM.

Adding and Removing Elements: When the expression bound to ngIf changes its value, Angular adds or removes the associated DOM elements accordingly, providing a seamless way to toggle visibility based on component logic.

Here's an example of using ngIf:

<div *ngIf="isLoggedIn">
  <p>Welcome, {{ username }}!</p>
  <button (click)="logout()">Logout</button>
</div>


In this example, the <div> element and its content are rendered only if the isLoggedIn property in your component class is true. If isLoggedIn is false, the entire <div> is removed from the DOM.

In your component class:

export class MyComponent {
  isLoggedIn: boolean = false;
  username: string = '';

  login() {
    // Some logic to perform login
    this.isLoggedIn = true;
    this.username = 'user123';
  }

  logout() {
    // Some logic to perform logout
    this.isLoggedIn = false;
    this.username = '';
  }
}

Here, the login() and logout() methods change the value of isLoggedIn, triggering the rendering or removal of the content based on whether the user is logged in or not.

You can also use ngIf with an else block to conditionally render different content:
<div *ngIf="isLoggedIn; else notLoggedIn">
  <p>Welcome, {{ username }}!</p>
  <button (click)="logout()">Logout</button>
</div>
<ng-template #notLoggedIn>
  <p>Please log in to continue.</p>
  <button (click)="login()">Login</button>
</ng-template>
In this case, if isLoggedIn is true, the content inside the first <div> is rendered. Otherwise, the content inside the else block (notLoggedIn) is rendered.

ngIf is a fundamental directive in Angular for controlling the visibility of elements based on dynamic conditions, making it essential for building dynamic and responsive user interfaces.







_____________________ngFor
Way to loop throuh database data
You can only lopp through lists
pokemons: pokemon[] = [{
    id:1,
    name: "Trevor",
    type:"Electric"
},{
    id:2,
    name: "Kessy",
    type:"water"
}]



<tr *ngFor="let pokemon of pokemnos">
<td class="pokemon-td">
{{pokemon.name}}
</td>
</tr>



_____________________modules
Allow for lazy loading - different modules will only load when being used
Provides logical separation
Prevents the whole treaa from loading


ng generate module pokemon
Generating UI component
    ng generate component pokemon/pokemon-list --module=pokemon/pokemon.module.ts

In Angular, modules are a way to organize your application into cohesive blocks of functionality. They help in managing the dependencies and configuration of your application. There are mainly two types of modules in Angular:

1. Root/Core Module (AppModule): This is the main module of your Angular application, conventionally named AppModule. It is responsible for bootstrapping the application and importing other modules required by the application. The root module is usually declared in the app.module.ts file.

        import { NgModule } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { AppComponent } from './app.component';

        @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule
        ],
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule { }



2. Feature Modules: These are additional modules that you create to organize and encapsulate specific features or components of your application. Feature modules help in keeping your application modular and maintainable by grouping related components, directives, pipes, and services together. Feature modules can be imported into the root module or other feature modules.
Here's an example of a feature module:

        import { NgModule } from '@angular/core';
        import { CommonModule } from '@angular/common';
        import { MyComponent } from './my.component';

        @NgModule({
        declarations: [
            MyComponent
        ],
        imports: [
            CommonModule
        ],
        exports: [
            MyComponent
        ]
        })
        export class MyModule { }


3. Shared modules
    contain shared services
    Componets used all over the app
    Universal dependencies

4. Routing Module
    For routing


_________________Components, Life Cycle Methods
Building blocks of the UI, card, footer, 
ngOnInit()
    -excecute code when a page first loads

Classes
Lifecycle methods
Interfaces
Construcors


_______________List/ Detail Page pattern
It a common design pattern in web dev

Dumb components are children of smart components
Smart components get data from the api
Dumb components get data from the smart components
      @Input() //receiving a single pokemon , dumb components receiving data
      detail!: Pokemon; //bang, null, coalescing operator



output()    
    -passing data,state and events up a tree
    -subject
    -event
input()
    -passing data,state and events down a tree

A smart component always  passes data down to a dumb component

A dumb component accepts dta using the input()

creating a models folder
-Type checking

bang, null, coalescing operator
Null checking
Avoid introducing bugs


event handlers
(click)=handleRemove()
(remove)

events are enclosed in circles





___________________Services and dependency injection
ng service ldlsk;sk;

When a software grows out of control
Passing state to deeply nested components
Avoiding the use of smart and dumb components
Removing reliance of dependecies
Abstracting the code
Computationally intensive calls
Http calls
Database acceses


