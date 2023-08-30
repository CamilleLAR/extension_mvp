# Pet Diary

My Pets App is a web application that allows users to manage their pets care. Users can view a list of their pets, add new pets, edit pet details, and delete pets. Each pet has information such as name, type, birthdate, and notes.

## Table of Contents

- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Database Prep](#database-prep)
    - [.env File](#env-file)
    - [Create the Database](#create-the-database)
    - [Run Migration](#run-migration)
  - [Run Your Development Servers](#run-your-development-servers)
- [App Info](#app-info)
  - [Back End](#back-end)
    - [Database Tables](#database-tables)
      - [User Table](#user-table)
      - [Petlist Table](#petlist-table)
    - [Routes](#routes)
      - [Authorisation Routes](#authorisation-routes)
      - [Pets Routes](#pets-routes)
      - [User Routes](#user-routes)
  - [Front End](#front-end)
    - [Landing Page](#landing-page)
    - [User Flow](#user-flow)
      - [Dashboard Page](#dashboard-page)
      - [Add a Pet Page](#add-a-pet-page)
      - [My Pets Page](#my-pets-page)
- [Conclusion](#conclusion)

## Setup

### Dependencies

- Run `npm install` in the project folder to install dependencies related to Express (the server).

- Then `cd client` and run `npm install` to install dependencies related to React (the client).

### Database Prep

#### .env File

- Create a `.env` file in project directory to hold sensitive information such as API keys, database credentials, and other environment-specific variables. It's crucial to keep this information separate from your codebase for security reasons. In our case, we will use the .env file to store the credentials needed to access your MySQL database.

- Add the following lines, replacing the placeholders with your actual database credentials:

```env
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=petdiary
  DB_PASS=YOUR PASSWORD
  SUPER_SECRET=WHATEVER YOU WANT
```

*Make sure to replace "YOUR PASSWORD" with your actual MySQL root password.*

#### Create the Database

Before your app can store and retrieve data, you need to set up a database. We'll be using MySQL as our database management system.

- Open your MySQL command-line interface by entering `mysql -u root -p` in your terminal. You'll be prompted to enter your MySQL root password.

- Once you're in the MySQL CLI, create a new database for your app by entering the following command:

```sql
create database petdiary;
```

This command creates a database named 'petdiary' that your app will use to store its data.

- After creating the database, we need to update the user authentication method for your MySQL server to allow the app to connect. Enter the following command in the MySQL CLI, replacing YOUR_PASSWORD with your actual MySQL root password:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';
```

This step is necessary to ensure compatibility between the app and the MySQL server.

#### Run Migration

Migrations are a way to manage your database schema and keep it in sync with your application's codebase. We'll be using migrations to create the necessary tables for your app.

- In your terminal, navigate to the project directory where your app is located.

- Run the following command to execute the migrations and create the required tables:

```bash
npm run migrate
```

This command will create all relevant tables in your 'petdiary' database.

With these steps completed, your database will be properly set up, and your app will be able to store and retrieve data seamlessly.

### Run Your Development Servers

- Run `npm start` in your project directory to start the Express server on port 4000.

- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.

- Client is configured so all API calls will be proxied to port 4000 for a smoother development experience. Yay!

- You can test your client app in `http://localhost:5173`.

- You can test your API in `http://localhost:4000/api`.

## App Info

### Back End

#### Database Tables

In PetDiary, data is organised and stored in two main tables within the MySQL database. Each table serves a specific purpose and holds essential information to power the functionalities of the app.

##### User Table

The user table is where user-related information is stored. This table holds data such as user ID, firstname, lastname, username, registration date and password. It is crucial for user authentication, registration, and personalisation.

##### Petlist Table

The petlist table stores individual user's pet information: ID, name, type, birthdate and notes.

Each table serves a unique role in facilitating the app's functionalities, providing a structured and organized way to manage user data, preferences, and interactions with recipes.

For a visual representation of the database schema, refer to the [schema diagram](/database%20schema.png).

#### Routes

The PetDiary app utilises various routes to handle different functionalities. This section provides an overview of the different types of routes used in the app, including authorisation routes, user routes and pets routes.

##### Authorisation Routes

Authorisation routes play a crucial role in ensuring secure access to the app's features. These routes handle user registration, login, authentication and user details. By enforcing user authentication, authorisation routes help protect user data and ensure that only authorised users can access specific functionalities.

##### Pets Routes

Pets routes are at the core of the app's features. These routes enable users to access their pet's information and manage them.

##### User Routes

User routes were initially created as a way to test and maintain user information before the extension project work was done. These routes are now redundant with the authorisation and pets route providing all the necessary routes.

By categorising routes into these distinct types, PetDiary effectively organises its functionalities and enhances the app's maintainability and scalability.

### Front End

#### Landing page

The first page users can access is the landing page. It allows the user to register or log in to access their information.

#### User Flow

Once registered and logged in, the user has access to variety of pages and actions.
The top bar displays the Pet Diary name, it is also the menu that can be extended showing the other pages and the log out button.

##### Dashboard page

Upon log in, this is where users first lands.
This page displays the user information: profile picture, user name, email and calendar.

On that same page the user can go to the "My Pets" and "Add a pet" pages.

##### Add a pet page

This page has a pre-set form to allow the user to add their pet's details and register them. The information required is the pet's name, type (options are: cat, dog, bird and fish) and date of birth. The notes are an optional field and can be left blank.
The submit button will add the information entered to the database and redirect the user to their pets' page.

##### My Pets page

This page show the list of the different pets registered for the user. The display card includes a picture, the pet's name, type, date of birth and any note added.
To access the pet's profile the user can either click on the card or the "Go To Profile" button.

The pet's profile displays the same information as the card, it also allows the user to edit the pet's details and delete the pet's profile.

## Conclusion

Congratulations! You've reached the end of my README, and I hope you now have a clear understanding of what Pet Diary has to offer.
