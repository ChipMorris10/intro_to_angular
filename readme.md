Intro to Angular 9/9/15

Angular helps us build complex, single-page applications very quickly.

Why use Angular?
It’s new(?) and it’s taking off. It’s easy to read and write and it requires less lines of code vs the others.

Three common complaints of using Angular?

- Steep learning curve
- Two-way binding - your html template can include variables and your page auto updates when the variables change
- Extending HTML - turning a static webpage into a dynamic one
- Once you use it on a document, you’re locked-in. In other words, because of the specific jargon, there’s no way to abstract it; it will have to be rewritten if you switch to a different tool.
- With Angular you have to design your webpage from the ground up. In other words, with jQuery you can think of what you want to do to a page during the work. With Angular you have to think about this before you design your page.

Is Angular a MVC (Model View Controller) framework?
Yes.
https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/02-angular-mvc.md
Model
It’s where your application’s data lives, representing the current state.
(Legos: the different types of legos are the models. They come in different size shapes and sizes. The controller grabs the necessary ones.)

View
It displays your application’s data (from the model) for the end user and handles user interaction
(Legos: the final product is the view.)

Controller (often called the view-model)
Controls the relationship between the Models and Views by exposing parts of the model and managing state.
(Legos: the builder is the controller. He’s responsible for grabbing all the necessary building blocks and ordering them as necessary.)

For a simple breakdown of the terms, see https://realpython.com/blog/python/the-model-view-controller-mvc-paradigm-summarized-with-legos/

What does ng-app do? - it auto-bootstraps an AngularJS application. It’s placed on the <html> or <body> tags
What does ng stand for? - it’s the core module and is loaded by default when AngularJS is started.

Data Binding
Traditionally, templates that users see are static but two-way binding allows for templates to be automatically updated when the data changes. When a model changes, the view nows about it; when a view changes, the model knows about it. Another way to say this: if the data changes in the controller, the change is immediately updated in the view, and vice versa.

What does the ng-model do?
It binds something (input, select, textarea, or a custom control to a property.

What is dirty checking?
It’s the process of checking every watch to detect for changes. There are two scenarios:

- get a watch from list
- check whether item has been changed
- if no change, then move on

- get watch from list
- check whether item has been changed
- if yes, update DOM and return to loop

What are the {{ }}? (bindings)
They are used to bind Angular data to HTML in the same way ng-bind does.

What is data binding?
It’s the automatic synchronization of data between the model and view components. When the model changes, the view changes.

The $digest loop
The $watch method on the $scope object sets up a dirty check on every call to $digest inside the Angular loop. In other words, they work together to determine if a change has been made to any expression.

What are angular expressions? How do they compare to tags from templating engines I’ve used?

What happens when you write invalid code in an expression? What type of error do I get?
The code executes but it shows up on the DOM just as it was written. Ex: {{ 3.145926 | number 1 }}
should return 3.1 but if I make an error it will return just as it’s written: {{ 3.145926 }}

What is a filter? What is one I haven’t used?
A filter formats the value of an expression. Ex:
{{4.34 | currency }}  // $4.34
I haven’t used | searchText

What’s the syntax for filters?
{{ expression | filter : expression : comparator }}

Can you use multiple filters?
Yes. {{ expression | filter1 | filter2 }}

ng-app - bootstraps angular
ng-controller - defines where scope (start/end) controller lives in the HTML; links back to the controller in the modules
ng-click - click event(akin to on click in JS)
ng-repeat - used to inertia (akin to a forEach)
$scope - binds values/variables to the view
SETTING/GETTING an angular module - angular code lives in the view/model
CREATING a controller - defines what gets bound to the view via $scope

Directives
Markers on a DOM element like an attribute, or element name, or class, that tell Angular’s HTML complier ($compile) to attach specific behavior to that DOM element.
Some are built-in: ngModel, ngClass, ngBind, ngClick, ng-app, ng-if. Others can be created by the user.