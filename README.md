# Smart Solver Website

[<< Link to the website >>](https://smartsolver.herokuapp.com)

## Technical documentation:

### Server and DB technologies:

NPM is the Node Package Manager we use in this project. It allows us to download modules and use it in our project.
NodeJS is used in the implementation to create a fully working Web Server and in order to do so we use a module called express.
Express is a module providing a flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
We use a SQL-based language to write queries, particularly, the DB implemented was PostgreSQL. Sequelize is a promise-based Node.js Object–relational mapping tool
for Postgres and other Databases. This tool is imported in our project as a module to make simpler queries.

### Components:

A component is a self-contained and reusable piece of UI logic. We use 5 different components in this project implementation. The first two are Header and Footer. The header contains all the landmarks of the website and appears in the first page of every different section of the web site. The Footer appears on the last page of every different section of the web site and includes the company logo and Quick Link to All the different sections of the website.
The remaining three components consist of preview cards appearing in every group page of the site, namely Services, Areas and People. The preview card for services is called CardService and contains an Image, the name of the service and a short preview description. The CardArea component also contains an Image, the name of the area and a short preview description. Those two cards could have been the same component but since the styling of the two components were different we chose to use two separate components for those. The last component is CardPeople and represents an employee. It consists of image, name, position and short preview text.

### Final Comments:

This website was made with Nuxt and Vuejs frameworks.

The approach considered for the group was to use components in the different parts of the website in order to re-use the same structures. In this way was possible to obtain an uniform design and also to reduce the ammount of work related with the structure and styling of the website.

Apart from that, there was possible to retrieve data from the DB by a request/response approach and the obtained data were inserted (binding) into the differents elements of the website. Also, the request/response approach was used to get information from a dictionary from one particular endpoint and then the obtained data were binded into the basic pages like the homepage and the about page.

Finally, it is relevant to mention that was created a default layout to make homogeneous the structure of the site, alligning the font types and the other general customizations. In this layout were included the footer and header components described previously.

## Build Setup:

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
