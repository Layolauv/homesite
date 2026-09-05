---
title: 'Web Development For Kids: HTML'
date: '2024-05-01'
tags: ['HTML', 'Javascript', 'CSS']
img: '/blog-assets/web_development_for_kids_html.jpg'
description: "Walk through the fundamentals of HTML with this beginner-friendly guide as you build a personalized bio page and interactive feedback form step by step. You'll master essential web development concepts from document structures and tags to form controls—in a fun, practical crash course."
---

# Web Development for Kids: HTML!

I’m not sure why you want to learn HTML. Maybe you’ve heard that you need to learn it to build websites, or you heard one of your “tech friends” mention it in passing, whatever the reason–welcome to the HTML rush hour crash course, which would help you become an HTML master (whatever that means) on your commute to work…not really it won’t. This article is intended to be a cheat sheet to help with understanding what HTML is, what it does, and what you could possibly use it for.

## What is HTML?

HTML stands for Hypertext Markup Language, [Wikipedia](https://en.wikipedia.org/wiki/HTML) describes HTML as “the standard [markup language](https://en.wikipedia.org/wiki/Markup_language) for documents designed to be displayed in a [web browser](https://en.wikipedia.org/wiki/Web_browser)”.

HTML, among other things, is the semantic backbone of every web page you visit. HTML, CSS, and Javascript (ignore the other two for now), are the three major languages that are “understood” by the web browser. In fact, a website could just be one HTML file, cool huh?

HTML was basically made to be a way to write things that browsers could read, understand and display.

> **Little Tidbit**
> 
> The first public HTML specification was written in 1991 by [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee), it described 18 HTML elements, 11 of which are still used to date.

Enough talking, let's create our first webpage.

---

## Our First Webpage

Been feeling a bit down lately, maybe your friends don't appreciate how cool you are, creating your first webpage might just be what you need to show them.

On your Mac or PC, create a folder and call it whatever name you like. In said folder, create a new file called `index.html`. You could also use [codepen](https://codepen.io) to create your first webpage.

> **Little Tidbit**
> 
> Most web servers when trying to display your website look for a file name `index.html`, making it a decent name for the first web page you create.

### What should be on our webpage?

Considering you’re making this to show your friends how cool you are, you could write all the things you think make you cool on the page, right?

---

## Editing Our Page

To open our page and edit, we can use various editors, including:
* Notepad
* Notepad++
* Sublime Text
* VS Code

To follow this crash course you can use whichever you like but we’d be recommending you use VS Code due to its popularity and beginner-friendliness (*ps: the author is not a VS Code fan but still recommends it, it's that good*).

Now open your file with VS Code, it should be empty.

The next thing we’d do is add the Doctype. The Doctype basically tells the web browser that our page is an HTML page, and it also describes the kind of HTML page it is.

> **Little Tidbit**
> 
> HTML has undergone different versions over the years, going from version 2 (1995) to version 5 (2004, the current version we use) and each version has had its own slightly different doctype.

---

## Let’s Code

### Doctype

To add the doctype to the file, simply add `<!DOCTYPE html>` to the top of the file and you're golden.

---

## HTML Elements

HTML files are made up of HTML elements and each HTML element ideally comprises of an opening tag, a child element, and a closing tag. The element child refers to anything that is between the element’s opening and closing tag.

An actual HTML element, like the paragraph element, opens with a `<p>` tag and closes with a `</p>` tag. Most HTML elements are like the paragraph element here, but some of them have “self-closing” tags—meaning, these tags don't need a different tag to close them; they open and close on the same tag. An example is the `<input>` tag.

*PS: An element child usually could be anything, it could be plain text or other HTML elements. While there are general guidelines to follow for specifying element children (we’d touch on this in a bit), for the most part, anything could be a child of anything.*

Self-closing tags cannot have children due to the fact that they don't have separate opening and closing tags. The `<input>` element, usually used in forms, is a self-closing element.

We are also introduced to the concept of **element attributes**. Element attributes are used to give HTML elements their character. Think of humans: we all have defining traits (some might call them “attributes”) that make us unique. Same goes for HTML elements.

To add an attribute to an element, you add a `key="value"` pair to the element's opening tag (or just its tag if it is self-closing).

### The `<html>` Tag

The next tag to include in our HTML file after the doctype is the `<html>` tag. This basically is where all our HTML code will reside. To add the HTML tag, update your `index.html` file to look like this:

```html
<!DOCTYPE html>
<html lang="en">
<!-- html body -->
</html>
```

> **Little Tidbit**
> 
> The line that reads `<!-- html body -->` is called a comment. Comments are lines of code that your browser generally ignores. In HTML, comments are written starting with `<!--`, adding the comment body, and ending with `-->`. E.g., `<!-- this is a comment -->`.

Every other thing we are going to write in our HTML file is going to be a child of the `<html></html>` tag. We can see that this element has an attribute of `lang` with the value of `"en"`. This tells our browser that every child of this HTML element has its language set to English.

### The `<head>` Tag

The first tag we are going to put in the HTML body is the `<head>` tag. This tag houses metadata for your HTML file. When we start talking about CSS/JavaScript, we will include those files in the `<head>` tag. For now, let us add a `<title>` tag in there so it looks like so:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>The Awesome Layo</title> <!-- my name is Layo --> 
</head>
</html>
```

Since this is gonna be a bio of how awesome you are, you can make the title `The awesome <your-name>` as I did with mine. First, save the file (`Ctrl/Cmd + S`), then open the file in the browser by right-clicking on the file in Finder or File Explorer and opening it with your favourite browser.

Checking the top of the browser tab, you should see **The Awesome `<your-name>`** there; whatever you put in your `<title>` element is going to show up here.

### The `<body>` Tag

The next element we would be taking a look at is the `<body>` element. This element houses everything that is going to be displayed in your HTML page. Edit `index.html` to look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>The Awesome Layo</title>
</head>
<body>   <!-- the body element -->
</body>
</html>
```

It has an opening and closing tag like most of the elements on our page, and it’s going to house all we do from now on.

> **Big Tidbit: Indentation**
> 
> In order to make your code as readable as can be, it's always a good idea to indent properly. As you can see in the above code, the `<title>` tag is indented since it's a child of the `<head>` tag. Every child of every element should be indented from that element. Some people use 2 spaces or 4 spaces for indentation, but I’d recommend using a tab.

### Headings

We have the heading tag, which is represented by `h` and a number from `1` to `6`. Just to demonstrate, let’s modify our code a bit to look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>The Awesome Layo</title>
</head>
<body>
   <h1>I'm heading 1</h1>
   <h2>I'm heading 2</h2>
   <h3>I'm heading 3</h3>
   <h4>I'm heading 4</h4>
   <h5>I'm heading 5</h5>
   <h6>I'm heading 6</h6>
</body>
</html>
```

Save and then check your browser for its result.

Keep in mind that header levels (`h1`-`h6`) don’t just affect font size—they are used to order subheadings under headings. Meaning a subheading for an `h1` can be any heading below its level (`h2` to `h6`); hence, an `h1` should not be below an `h3` if it's a subheading of `h3`. The same rule applies to other header levels.

If you just want a smaller or bigger heading, use CSS instead.

For our web page, we’d need a heading to kick off our awesomeness. I'd make mine `The awesome Layo: A bio`, but you can make yours whatever you want, so the HTML body ends up looking like this:

```html
...
<body>
   <h1>The Awesome Layo: A Bio</h1>
</body>
```

### Paragraphs

The `<p>` tag is used to represent paragraph elements where we can write text. Here you could write a bit about yourself. I’d just put some Latin placeholders in mine for kicks so it looks like this:

```html
...
<body>
   <h1>The Awesome Layo: A Bio</h1>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam cum non veritatis in reprehenderit, voluptatibus nam. Distinctio enim fugit, eum, culpa sit quas deleniti numquam laudantium repudiandae porro, saepe nobis!</p>
</body>
```

### Lists

Next up, we should list things we are good at! HTML lets us do that with lists. HTML has two types of lists:
* **Ordered lists:** `<ol></ol>`
* **Unordered lists:** `<ul></ul>`

Each child of a list is an item, represented by the `<li></li>` tag. To see how it works, let's try to list things we are good at, in order of skill. Below the paragraph element, we’d add the list:

```html
...
<ol>
   <li>Swimming</li>
   <li>Fortnite</li>
   <li>Coding</li>
</ol>
```

Remember, the `<ol>` tag should be indented from the body. Now save and view your file!

It seems a bit weird to just list things without a heading before, so let’s add an `<h2>` (because it’s a subheading for `<h1>`) before our list:

```html
...
<h2>Things Layo is good at.</h2>
<ol>
    <li>Swimming</li>
    <li>Fortnite</li>
    <li>Coding</li>
</ol>
```

Say you’re not exactly sure about how good you are at some things, but you want to list them too—you can do that with unordered lists (`<ul>`). Now let's add the unordered list for additional skills:

```html
...
<h2>Things Layo is good at.</h2>
<ol>
   <li>Swimming</li>
   <li>Fortnite</li>
   <li>Coding</li>
</ol>
<ul>
   <li>Drinking (apple juice, I won three apple juice drinking contests)</li>
   <li>Skiing</li>
   <li>Sleeping</li>
</ul>
```

Save it and check your browser page. Looking good, smarty!

### Images

Our bio seems to be missing something that lets others know it’s us: an image of us. We can add that right after the first heading.

Adding an image is pretty simple:
1. Find an image from your computer.
2. Make sure it's a `.png`, `.jpg`, or `.gif`.
3. Rename it to `img.jpg`.
4. Move it to the folder where you created your `index.html` file.
5. Include it in your file with an `<img />` tag (a self-closing tag).

The tag is going to look like this:

```html
...
   <img src="img.jpg" width="200" />
```

You can see that we added two attributes:
* **`src`**: Tells the browser where to find the file (in this case, `"img.jpg"`).
* **`width`**: Tells the browser what width the image should be. (*Note: There are better ways of specifying image size using CSS, but for now we’d use the width attribute.*)

Add the image tag right after the first heading, and the full code should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>The Awesome Layo</title>
</head>
<body>
   <h1>The Awesome Layo: A Bio</h1>
   <img src="img.jpg" width="200" />
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam cum non veritatis in reprehenderit, voluptatibus nam. Distinctio enim fugit, eum, culpa sit quas deleniti numquam laudantium repudiandae porro, saepe nobis!</p>
   <h2>Things Layo is good at.</h2>
   <ol>
       <li>Swimming</li>
       <li>Fortnite</li>
       <li>Coding</li>
   </ol>
   <ul>
       <li>Drinking (apple juice, I won three apple juice drinking contests)</li>
       <li>Skiing</li>
       <li>Sleeping</li>
   </ul>
</body>
</html>
```

Now the bio looks way nicer than when we first started!

---

## Containers

Containers are like boxes... technically a box *is* a container, but that’s beside the point. Containers in HTML do nothing except “hold” child elements; sometimes they render with space around them, and sometimes they do not alter layout visually at all. 

We have two primary types of containers:
1. **Block containers**
2. **Inline containers**

*(Right now do not worry about what “block” or “inline” fully means under the hood, but keep it in mind as it’s going to be explained later on).*

### The Inline Container

This container is the `<span></span>` element. It has a couple of uses, but one of them is to change how parts of text look inline. Say you have a simple sentence in a paragraph element like this:

```html
<p>Mrs. Heinkly was a rather stern woman.</p>
```

And you wanted to emphasize how stern she was by putting the word "stern" in bold. A way to do that is through the `<span>` element:

```html
<p>Mrs. Heinkly was a rather <span style="font-weight: bold;">stern</span> woman.</p>
```

If you view that piece of code in a browser, you’d see the word **stern** in bold. The `style` attribute lets us add CSS properties to HTML elements "in-line". The value `"font-weight: bold"` is CSS lingo for telling the browser: *"Hey, please bolden the text inside this element!"*

If inline styling sounds confusing right now, that is perfectly fine. We’d discuss CSS in-depth in the next part of this series.

### The Block Container

The standard HTML block container is the `<div></div>` element. It houses whatever children are inside it, and it’s usually used to group sections and show separation between different structural blocks of our HTML file.

Now let us modify our bio webpage and put all our current content inside a `<div>`. Our full code should now look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>The Awesome Layo</title>
</head>
<body>
   <h1>The Awesome Layo: A Bio</h1>
   <div id="bio-description"> <!-- new div -->
       <img src="img.jpg" width="200" />
       <p>Lorem <span style="font-weight: bold;"><!-- new span-->ipsum</span> ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam cum non veritatis in reprehenderit, voluptatibus nam. Distinctio enim fugit, eum, culpa sit quas deleniti numquam laudantium repudiandae porro, saepe nobis!</p>
       <h2>Things Layo is good at.</h2>
       <ol>
           <li>Swimming</li>
           <li>Fortnite</li>
           <li>Coding</li>
       </ol>
       <ul>
           <li>Drinking (apple juice, I won three apple juice drinking contests)</li>
           <li>Skiing</li>
           <li>Sleeping</li>
       </ul>
   </div>
</body>
</html>
```

Notice the new HTML attribute we added to the `div`: the `id` attribute. This is one of the most important attributes in HTML. It’s used to give elements a unique identifier (or ID for short). In our case, `"bio-description"` is the identifier. Identifiers are heavily used by CSS and JavaScript to select specific elements.

### A Nifty Trick: Links

Let’s say your name has a cool definition on Urban Dictionary—you could add a link to that in your webpage so that when your name is clicked, the definition opens!

This is done using the anchor element (`<a></a>`). Using this element is very simple: we put the clickable text as the element child, and the link address inside the `href` attribute. Something like this:

```html
<a href="https://www.google.com">google.com</a>
```

Simple enough! So let's add it to our page. Replace occurrences of your name with an anchor tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>The Awesome Layo</title>
</head>
<body>

   <h1>The Awesome <a href="https://www.urbandictionary.com/define.php?term=Layo">Layo</a>: A Bio</h1>
   <div id="bio-description">
       <img src="img.jpg" width="200" />
       <p>Lorem <span style="font-weight: bold;">ipsum</span> ipsum dolor sit amet consectetur,
            adipisicing elit. Quibusdam cum non veritatis in reprehenderit, voluptatibus nam. Distinctio enim fugit,
             eum, culpa sit quas deleniti numquam laudantium repudiandae porro, saepe nobis!
       </p>
       <h2>Things <a href="https://www.urbandictionary.com/define.php?term=Layo">Layo</a> is good at.</h2>
       <ol>
           <li>Swimming</li>
           <li>Fortnite</li>
           <li>Coding</li>
       </ol>
       <ul>
           <li>Drinking (apple juice, I won three apple juice drinking contests)</li>
           <li>Skiing</li>
           <li>Sleeping</li>
       </ul>
   </div>

</body>
</html>
```

In the browser, you'll see an underline and a blue/purple color signifying that the text is a link. Clicking it opens the linked page.

We can also make the link open in a new tab by adding a `target` attribute with the value `"_blank"` like so:

```html
<a href="https://www.urbandictionary.com/define.php?term=Layo" target="_blank">Layo</a> <!-- opens in a new tab -->
```

---

## HTML Forms

HTML Forms are very similar to physical paper forms. We’d be going through a few HTML form elements and creating a contact form to collect feedback from people who view our bio.

### Inputs and Labels

Almost every form you see uses input and label elements.

Input elements can be transformed into various fields using types: text fields, radio buttons, checkboxes, submit buttons, etc.

Before adding our form controls, let us create another `div` right after our `#bio-description` div. We will give this div an `id` of `"contact-form"`:

```html
...
   <div id="contact-form"></div>
...
```

The information we want to collect from visitors includes:
* Full Name
* Email
* Gender
* Age Range
* What they think of our bio site
* A review

Let’s build each input field step-by-step!

#### Text Field

A text field uses an `<input>` element with `type="text"`. Let us add one for the user's full name inside our contact form container:

```html
<input type="text" name="fullname" placeholder="John Doe" id="ct-fullname" />
```

#### Email Field

Next, we create an email field using `type="email"`:

```html
<input type="email" name="email" placeholder="jonny@doe.com" id="ct-email" />
```

This field automatically validates that the user enters a properly formatted email address when submitted—no JavaScript required thanks to built-in HTML5 form validation!

#### Radio Buttons

Let’s ask readers to select their gender. To keep options distinct, we’ll provide three choices: Male, Female, and Other. For mutually exclusive single-option choices, we use radio buttons.

Radio buttons are unique because multiple radio inputs share the exact same `name` attribute so the browser knows they belong to the same option group.

We'll place them inside a container with the `id="gender-radio"`:

```html
<div id="gender-radio">
   <input type="radio" id="gender-male" name="gender" value="m">
   <label for="gender-male">Male</label>

   <input type="radio" id="gender-female" name="gender" value="f">
   <label for="gender-female">Female</label>
  
   <input type="radio" id="gender-other" name="gender" value="o">
   <label for="gender-other">Other</label>
</div>
```

**Key components introduced here:**
* **`<label>`**: Connects text to an input field. The `for` attribute on a label must match the `id` attribute of the input element it belongs to.
* **`value`**: Specifies what data gets sent when that particular radio button is selected.

#### Select Fields (Dropdowns)

It’s time to ask readers for their age range using a dropdown select menu.

The `<select>` element acts as the parent container, while each dropdown option is represented by an `<option>` child element:

```html
<div id="age-range">
     <label for="age-range-select">How old are you?</label>
     <select id="age-range-select"> 
          <option value="5_10">5 to 10</option>
          <option value="10_12">10 to 12</option>
          <option value="13_17">13 to 17</option>
          <option value="18+">18 and up</option>
     </select>
</div>  
```

#### Checkboxes

Checkboxes allow users to select one or multiple options from a set. To create a checkbox, use an `<input>` tag with `type="checkbox"`.

```html
<div id="bio-thoughts">
    <p>What comes to your mind when you read through this bio?</p>
    <input type="checkbox" id="cool" name="cool" value="cool">
    <label for="cool">It's cool</label><br>
    <input type="checkbox" id="tasteful" name="tasteful" value="tasteful">
    <label for="tasteful">It's Tasteful</label><br>
    <input type="checkbox" id="edgy" name="edgy" value="edgy">
    <label for="edgy">It's Edgy</label><br>
</div>
```

#### Textarea Element

The `<textarea>` element provides a multi-line text field, ideal for longer comments or reviews:

```html
<div id="review">
    <label for="honest-review">Leave an honest review of this bio:</label><br />
    <textarea id="honest-review" name="review" rows="4" cols="50" placeholder="This is a really cool bio. You're hotstuff Layo!"></textarea>
</div>
```

* The **`rows`** attribute specifies how many lines tall the box is.
* The **`cols`** attribute specifies how many characters wide it is.
* Unlike single-line inputs, `<textarea>` is not self-closing and uses standard `<textarea></textarea>` tags.

---

### Finalizing the Form

To make our form functional, we need a submit button and the wrapper `<form>` element.

We create a submit button using an input with `type="submit"`:

```html
<input type="submit" value="GO!" />
```

Finally, all input controls must be wrapped inside a `<form>` element rather than just a generic `<div>`. Let's update our container to an active `<form>` element:

```html
<form id="contact-form">
   <input type="text" name="fullname" placeholder="John Doe" id="ct-fullname" />
   <input type="email" name="email" placeholder="jonny@doe.com" id="ct-email" />
   
   <div id="gender-radio">
       <input type="radio" id="gender-male" name="gender" value="m">
       <label for="gender-male">Male</label>

       <input type="radio" id="gender-female" name="gender" value="f">
       <label for="gender-female">Female</label>

       <input type="radio" id="gender-other" name="gender" value="o">
       <label for="gender-other">Other</label>
   </div>

   <div id="age-range">
       <label for="age-range-select">How old are you?</label>
       <select id="age-range-select"> 
           <option value="5_10">5 to 10</option>
           <option value="10_12">10 to 12</option>
           <option value="13_17">13 to 17</option>
           <option value="18+">18 and up</option>
       </select>
   </div>

   <div id="bio-thoughts">
       <p>What comes to your mind when you read through this bio?</p>
       <input type="checkbox" id="cool" name="cool" value="cool">
       <label for="cool">It's cool</label><br>
       <input type="checkbox" id="tasteful" name="tasteful" value="tasteful">
       <label for="tasteful">It's Tasteful</label><br>
       <input type="checkbox" id="edgy" name="edgy" value="edgy">
       <label for="edgy">It's Edgy</label><br>
   </div>

   <div id="review">
       <label for="honest-review">Leave an honest review of this bio:</label><br />
       <textarea id="honest-review" name="review" rows="4" cols="50" placeholder="This is a really cool bio. You're hotstuff Layo!"></textarea>
   </div>

   <input type="submit" value="GO!" />
</form>
```

Now, if you test the form by entering an invalid email address and hitting "GO!", the browser will step in and display a built-in validation error!

---

## Conclusion

This marks the end of our introductory HTML guide!

Don't worry if the page looks plain or unstyled right now. In the upcoming CSS section, we will add styles to make it look clean and professional, and in the JavaScript section, we'll write logic to actually process and store the form submissions.

Bye for now!
