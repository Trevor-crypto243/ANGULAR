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



______________String Interpolations {{}}
Putting a number or a string inside two curly braces and then they get displayed on the web page
Displaying variables on the screen 
 