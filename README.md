# Cointab SE-ASSIGNMENT

This project is a simple 2-page website built using Node.js and MongoDB. It allows users to interact with data fetched from an external API and store it in a database.

## Technologies Used

- Backend: Node.js, MongoDB
- External API: JSONPlaceholder (https://jsonplaceholder.typicode.com)
- Dependencies: Express.js, Mongoose, Axios


## Deployed link

- Backend - https://cointab-mxqr.onrender.com/
- Frontend - https://lighthearted-selkie-35dd7c.netlify.app/

## Features

### Home Page (Page 1)

- **Prominent Heading**: Upon opening the website, users are greeted with a prominent heading stating "Cointab SE-ASSIGNMENT."
- **Fetch Users**: The page includes a button named "All Users" that fetches data from the specified API (https://jsonplaceholder.typicode.com/users).
- **Display User Information**: Essential user information, including Name, Email, Phone, Website, City, and Company, is displayed.
- **Add Button**: Two buttons, "Open" and "Add," are provided alongside the displayed user information.
  - **Add Functionality**: Clicking the "Add" button stores all user information from the API in the database.
  - **Visibility**: If the database contains the user's entry, the "Open" button is shown, and the "Add" button is hidden.
  - **Open Button**: Clicking the "Open" button opens a new Post page.

### Post Page (Page 2)

- **Fetch Posts**: Data from the API (https://jsonplaceholder.typicode.com/posts?userId=${userId}) for the specific userId stored in the database is fetched.
- **Display Post Information**: Essential user information, including Name (corresponding to the specific userId), Title, Body, and Company (associated with the particular userId), is displayed.
- **Buttons**: Two buttons, "Bulk Add" and "Download in Excel," are placed at the top of the page. Initially, only the "Bulk Add" button is visible.
  - **Bulk Add Functionality**: Clicking the "Bulk Add" button stores all the posts present on that page into the database.
  - **Visibility**: If the database contains post entries for the specific userId, the "Bulk Add" button is hidden, and the "Download in Excel" button is shown.
  - **Download in Excel**: Clicking the "Download in Excel" button initiates the download of an Excel file containing all the post information for that particular user.


## API Endpoints

### Home Page (Page 1)

- **GET /users/all**: Fetch all users from the specified API (https://jsonplaceholder.typicode.com/users).
- **POST /users/add**: Add a new user to the database.
  - Request Body: User information (Name, Email, Phone, Website, City, Company).
- **GET /users/:userId**: Retrieve user information by userId.

### Post Page (Page 2)

- **GET /posts/:userId**: Fetch posts for a specific userId from the API (https://jsonplaceholder.typicode.com/posts?userId=${userId}).
- **POST /posts/bulk-add**: Bulk add posts for a specific userId to the database.
- **GET /posts/download-excel/:userId**: Download posts in Excel format for a specific userId.


## Screenshots

### Home Page


![screenshot](https://github.com/Chandan2812/cointab_assignment/assets/108578299/98d18dbe-7726-4a06-88ac-21bebf8d6eb6)


### Post Page

![screenshot (1)](https://github.com/Chandan2812/cointab_assignment/assets/108578299/1d45e4eb-ab86-462d-ac5c-0a23f71b0cb2)

