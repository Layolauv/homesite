---
title: 'Web Development For Kids: HTML'
date: '2024-05-01'
tags: ['HTML', 'Javascript', 'CSS']
img: '/blog-assets/web_development_for_kids_html.png'
description: "Walk through the fundamentals of HTML with this beginner-friendly guide as you build a personalized bio page and interactive feedback form step by step. You'll master essential web development concepts from document structures and tags to form controls in a fun, practical crash course."
---

# Web Development for Kids: HTML!

I’m not sure why you want to learn HTML. Maybe you’ve heard that you need to learn it to build websites, or you heard one of your “tech friends” mention it in passing. Whatever the reason, welcome to this HTML crash course! 

This guide serves as a practical cheat sheet to help you understand what HTML is, what it does, and how to build your very first webpage from scratch.

---

## What is HTML?

HTML stands for **Hypertext Markup Language**. According to [Wikipedia](https://en.wikipedia.org/wiki/HTML), HTML is "the standard markup language for documents designed to be displayed in a web browser."

HTML serves as the semantic backbone of every web page on the internet. Along with CSS and JavaScript, it is one of the core languages understood by web browsers. In fact, an entire website can consist of just a single HTML file.

> **Little Tidbit**
> The first public HTML specification was written in 1991 by [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee). It described 18 HTML elements, 11 of which are still in use today.

---

## Setting Up Your Workspace

Before writing code, let's prepare your environment and tools.

### 1. Creating the File Structure
1. On your Mac or PC, create a new folder with any name you like.
2. Inside that folder, create a new file named `index.html`. 

*(Alternatively, you can follow along online using [CodePen](https://codepen.io).)*

> **Little Tidbit**
> Web servers default to looking for a file named `index.html` when rendering a site's root page, making it the standard filename for homepages.

### 2. Choosing an Editor
You can edit HTML files using basic text tools or specialized code editors:
* Notepad / TextEdit
* Notepad++
* Sublime Text
* VS Code

For this guide, **VS Code** is recommended due to its widespread popularity and beginner-friendly features.

---

## Understanding HTML Syntax

HTML documents are built using **elements**, which dictate how content is structured.

### Tags and Children
* **Standard Tags:** Most HTML elements consist of an opening tag, content (the child element), and a closing tag. For example, a paragraph uses `<p>` to open and `</p>` to close.
* **Self-Closing Tags:** Some elements do not enclose text and close within a single tag, such as `<input>` or `<img>`. Because of this, self-closing tags cannot contain child elements.

### Attributes
Attributes add metadata or specific behaviors to elements. They are added inside the opening tag as key-value pairs: `key="value"`.

---

## Step-by-Step: Building the Bio Page

Let's build a complete personal biography page step by step.

### Step 1: The Document Skeleton
Open your empty `index.html` file in your editor and add the initial page architecture:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>The Awesome Layo</title>
</head>
<body>
    <!-- Main content goes here -->
</body>
</html>
```

* **`<!DOCTYPE html>`:** Informs the browser that this document follows the HTML5 standard.
* **`<html lang="en">`:** The root element wrapping all document code, setting the primary language to English.
* **`<head>`:** Houses metadata, page title, and external resource links.
* **`<body>`:** Contains all visual content rendered in the browser viewport.

> **Little Tidbit: Indentation**
> Properly indenting child elements using `Tab` or spaces makes your code significantly easier to read and debug.

---

### Step 2: Headings and Paragraphs

Headings range from `<h1>` (highest importance) down to `<h6>` (lowest importance). Heading levels structure the hierarchy of content and should not be used merely to adjust text size.

Add a main heading and an introductory paragraph inside your `<body>`:

```html
<h1>The Awesome Layo: A Bio</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam cum non veritatis in reprehenderit, voluptatibus nam.</p>
```

---

### Step 3: Adding Images and Links

Now let's include a profile picture and external resource links.

1. Place an image file (e.g., `img.jpg`) inside your project folder.
2. Embed the image and wrap key text with anchor links (`<a>`):

```html
<h1>The Awesome <a href="https://www.urbandictionary.com/define.php?term=Layo" target="_blank">Layo</a>: A Bio</h1>
<img src="img.jpg" width="200" alt="Profile Picture" />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

* **`src` attribute:** Points to the image file path.
* **`target="_blank"`:** Opens the link in a new browser tab.

---

### Step 4: Structuring Lists

HTML offers two primary list types:
* **Ordered Lists (`<ol>`):** Sequential lists numbered automatically.
* **Unordered Lists (`<ul>`):** Bulleted lists for unranked items.

Add subheadings and both list styles to showcase your skills:

```html
<h2>Things Layo is Good At</h2>
<ol>
    <li>Swimming</li>
    <li>Fortnite</li>
    <li>Coding</li>
</ol>

<h2>Other Hobbies</h2>
<ul>
    <li>Drinking apple juice</li>
    <li>Skiing</li>
    <li>Sleeping</li>
</ul>
```

---

### Step 5: Grouping Content with Containers

Containers help organize markup into distinct sections:
* **Inline Containers (`<span>`):** Used to wrap specific text inline without breaking content flow (e.g., applying inline styling).
* **Block Containers (`<div>`):** Used to group structural sections into distinct blocks.

Wrap your bio section in a main `<div>` and assign it a unique `id` attribute:

```html
<div id="bio-description">
    <p>Lorem <span style="font-weight: bold;">ipsum</span> dolor sit amet...</p>
    <!-- Rest of bio content -->
</div>
```

---

## Step-by-Step: Creating a Feedback Form

Next, let's build an interactive feedback form using standard HTML form controls wrapped in a `<form>` element.

```html
<form id="contact-form">
    <!-- Text Input -->
    <div>
        <label for="ct-fullname">Full Name:</label>
        <input type="text" name="fullname" placeholder="John Doe" id="ct-fullname" />
    </div>

    <!-- Email Input -->
    <div>
        <label for="ct-email">Email Address:</label>
        <input type="email" name="email" placeholder="jonny@doe.com" id="ct-email" />
    </div>

    <!-- Radio Buttons (Single Selection) -->
    <div id="gender-radio">
        <p>Gender:</p>
        <input type="radio" id="gender-male" name="gender" value="m">
        <label for="gender-male">Male</label>

        <input type="radio" id="gender-female" name="gender" value="f">
        <label for="gender-female">Female</label>

        <input type="radio" id="gender-other" name="gender" value="o">
        <label for="gender-other">Other</label>
    </div>

    <!-- Dropdown Select Menu -->
    <div id="age-range">
        <label for="age-range-select">How old are you?</label>
        <select id="age-range-select" name="age_range"> 
            <option value="5_10">5 to 10</option>
            <option value="10_12">10 to 12</option>
            <option value="13_17">13 to 17</option>
            <option value="18+">18 and up</option>
        </select>
    </div>

    <!-- Checkboxes (Multiple Selection) -->
    <div id="bio-thoughts">
        <p>What comes to mind when reading this bio?</p>
        <input type="checkbox" id="cool" name="thoughts" value="cool">
        <label for="cool">It's cool</label><br>

        <input type="checkbox" id="tasteful" name="thoughts" value="tasteful">
        <label for="tasteful">It's Tasteful</label><br>

        <input type="checkbox" id="edgy" name="thoughts" value="edgy">
        <label for="edgy">It's Edgy</label>
    </div>

    <!-- Multi-line Text Field -->
    <div id="review">
        <label for="honest-review">Leave an honest review:</label><br />
        <textarea id="honest-review" name="review" rows="4" cols="50" placeholder="This is a cool bio!"></textarea>
    </div>

    <!-- Form Submit Button -->
    <input type="submit" value="GO!" />
</form>
```

---

## Complete Project Code

Here is the final consolidated markup for your complete `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>The Awesome Layo</title>
</head>
<body>

    <h1>The Awesome <a href="https://www.urbandictionary.com/define.php?term=Layo" target="_blank">Layo</a>: A Bio</h1>

    <div id="bio-description">
        <img src="img.jpg" width="200" alt="Profile Picture" />
        <p>Lorem <span style="font-weight: bold;">ipsum</span> dolor sit amet, consectetur adipisicing elit. Quibusdam cum non veritatis in reprehenderit, voluptatibus nam.</p>
        
        <h2>Things <a href="https://www.urbandictionary.com/define.php?term=Layo" target="_blank">Layo</a> is Good At</h2>
        <ol>
            <li>Swimming</li>
            <li>Fortnite</li>
            <li>Coding</li>
        </ol>
        
        <ul>
            <li>Drinking (apple juice)</li>
            <li>Skiing</li>
            <li>Sleeping</li>
        </ul>
    </div>

    <form id="contact-form">
        <div>
            <label for="ct-fullname">Full Name:</label>
            <input type="text" name="fullname" placeholder="John Doe" id="ct-fullname" />
        </div>

        <div>
            <label for="ct-email">Email Address:</label>
            <input type="email" name="email" placeholder="jonny@doe.com" id="ct-email" />
        </div>

        <div id="gender-radio">
            <p>Gender:</p>
            <input type="radio" id="gender-male" name="gender" value="m">
            <label for="gender-male">Male</label>

            <input type="radio" id="gender-female" name="gender" value="f">
            <label for="gender-female">Female</label>

            <input type="radio" id="gender-other" name="gender" value="o">
            <label for="gender-other">Other</label>
        </div>

        <div id="age-range">
            <label for="age-range-select">How old are you?</label>
            <select id="age-range-select" name="age_range"> 
                <option value="5_10">5 to 10</option>
                <option value="10_12">10 to 12</option>
                <option value="13_17">13 to 17</option>
                <option value="18+">18 and up</option>
            </select>
        </div>

        <div id="bio-thoughts">
            <p>What comes to mind when reading this bio?</p>
            <input type="checkbox" id="cool" name="thoughts" value="cool">
            <label for="cool">It's cool</label><br>

            <input type="checkbox" id="tasteful" name="thoughts" value="tasteful">
            <label for="tasteful">It's Tasteful</label><br>

            <input type="checkbox" id="edgy" name="thoughts" value="edgy">
            <label for="edgy">It's Edgy</label>
        </div>

        <div id="review">
            <label for="honest-review">Leave an honest review:</label><br />
            <textarea id="honest-review" name="review" rows="4" cols="50" placeholder="This is a cool bio!"></textarea>
        </div>

        <input type="submit" value="GO!" />
    </form>

</body>
</html>
```

---

## Conclusion

Congratulations on building your first functional web page! 

While the raw HTML content provides document structure, it currently lacks custom presentation. In the next guide, we will explore **CSS** to style layout elements, fonts, and colors, followed by **JavaScript** to handle user form interactions dynamically.
