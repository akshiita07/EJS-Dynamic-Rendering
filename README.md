### Project Name: EJS Dynamic Rendering Example

### Project Description:
This project creates a simple web server using Express.js and EJS (Embedded JavaScript) templating engine. It demonstrates how to render dynamic content in an HTML template based on server-side data. The server sends a JavaScript object to the EJS template, which uses this data to conditionally display elements and embed raw HTML. The project also includes the use of partials for modularizing the template.

### Implementations:

1. **Project Initialization and Package Installation:**
   - **Initialize the project:**
     ```bash
     npm init
     ```
     This command sets up a new Node.js project and creates a `package.json` file.

   - **Install Express:**
     ```bash
     npm i express
     ```
     This command installs the Express.js framework for building the web server.

   - **Install EJS:**
     ```bash
     npm install ejs
     ```
     This command installs EJS for templating.

   - **Configure ES module syntax:**
     In `package.json`, add `"type": "module"` to enable ES module syntax.
     ```json
     {
       "type": "module"
     }
     ```

2. **Server Setup (app.js):**
   - Import necessary modules and create an Express app:
     ```javascript
     import express from 'express';
     import ejs from 'ejs';
     const app = express();
     const port = 3000;
     ```

   - Define the data object to send to the EJS template:
     ```javascript
     const data = {
         title: "EJS Tags",
         sec: new Date().getSeconds(),
         items: ["C", "Python", "Java"],
         htmlContent: "<em>This is em html text,</em>"
     };
     ```

   - Set up the root route to render the EJS template:
     ```javascript
     app.get('/', (req, res) => {
         res.render("index.ejs", data);
     });
     ```

   - Start the server and listen on port 3000:
     ```javascript
     app.listen(port, () => {
         console.log(`Server running on port ${port}`);
     });
     ```

3. **EJS Template (index.ejs):**
   - Basic HTML structure with embedded EJS tags:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Ejs1</title>
     </head>
     <body>
         <h1><%= title %></h1>
         <p>Current second: <%= sec %></p>
         
         <!-- Conditional rendering based on current second -->
         <% if(sec % 2 === 0){ %>
             <ul>
                 <% for(var i = 0; i < items.length; i++){ %>
                     <li><%= items[i] %></li>
                 <% } %>
             </ul>
         <% } else { %>
             <p>No items to display</p>
         <% } %>
         
         <!-- Embedding raw HTML content -->
         <%- htmlContent %>
         
         <!-- Including footer partial -->
         <%- include("footer.ejs") %>
     </body>
     </html>
     ```

### Key Features Implemented:
- **Dynamic Data Rendering:**
  The server passes a JavaScript object to the EJS template, which uses this data to render dynamic content.

- **Conditional Rendering:**
  The template uses EJS syntax to conditionally display content based on the value of `sec`. If the current second is even, a list of programming languages is displayed; otherwise, a message indicates no items are available.

- **HTML Embedding:**
  The `htmlContent` property in the data object includes raw HTML, which is embedded in the rendered output.

- **Template Partials:**
  The EJS template includes a footer partial (`footer.ejs`) to demonstrate template modularization.

This project provides a foundational example of using Express and EJS to create dynamic, server-rendered web pages.
