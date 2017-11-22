

# Handlebars Templating Engine

Handlebars is widely used templating engine. Handlebars templates look like regular HTML, with embedded handlebars expressions.

```html
<div class="entry">
  <h1>
    {{title}}
  </h1>
  <div class="body">
    {{body}}
  </div>
</div>
```

Here `{{title}}` and `{{body}}` are `Handlebars expressions`.

Handlebars is a bit similar to EJS template engine in structure and uses HTML markup syntax. Handlebars offers built in helpers and you can create your own helpers, Handlebars offers partials which allow for code reuse.

Lets write an application using Handlebars. Handlebars syntax is little simpler than Jade.


What our application will do?

It will first ask for user login, after the the user will be directed to a page where he/she can enter the choice he wants to know about.

Steps:

1. Install required libraries. `express` and `express-handlebars`.


- ```sh
$ npm install express --save
```
- ```sh
$ npm install express-handlebars --save
```
