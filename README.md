# Social Network API with Mongoose and MongoDB

Welcome to the Social Network Application! This application provides an API for managing users, thoughts, reactions, and friends in a social network context. It's built using Express.js for routing, MongoDB for the database, and the Mongoose ODM.Below, you'll find information on how to set up and run this application. 

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Future Feature: User registration and authentication
- Posting thoughts and reactions
- Managing a friend list
- Error handling and validation

### Prerequisites

- Node.js, Express and npm installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Jocy99/My-Social-Network.git

2. Install dependencies:

    ```shell
    npm install
    
3. Set up environment variables:

Create a .env file in the root directory and configure the following variables:

env:

  PORT=3000
  MONGODB_URI=mongodb://localhost/3001
  PASSWORD=yoursecretkey
  
Modify these values according to your preferences.

4. Start the application:

   ```shell
    npm start

Your app should now be running at http://localhost:3001.

## Usage

My application is a social media app that allows users to create, read, update, and delete (CRUD) their thoughts and posts. Here's a simple guide on how to use these fundamental features:

## Creating a Post

1. **Create a Post**: To share your thoughts or content, click on the "Create Post" button.

2. **Add Content**: You can enter text, links, or any other relevant content in the post.


## Reading Posts

1. **Home Feed**: Your home feed displays posts from your friends and the accounts you follow.

2. **Explore Content**: Discover new content and users in the Explore section.

3. **Search**: Use the search feature to find specific posts, users, or content by using keywords or hashtags.

## Updating a Post

1. **Edit Post**: If you want to make changes to your post, locate the post and click the "Edit" option.

2. **Make Edits**: Modify the post content as needed and save your changes.

## Deleting a Post

1. **Delete Post**: If you decide to remove a post, find the post you want to delete and click the "Delete" option.

2. **Confirmation**: Confirm the deletion, as this action is usually irreversible.


My Social Network application simplifies the process of creating, viewing, updating, and deleting posts, making it easy for you to manage your thoughts and engage with others in the social media community. Enjoy using the app to express yourself and connect with friends!

## Deployment
This guide will walk you through the steps to deploy the Social Network using Node.js and Express.js. Before starting, ensure you have the following prerequisites in place:

Node.js installed on your server.
A working installation of Express.js.
A codebase of the application ready for deployment.

1. Clone the repository
Clone your application's repository onto your local using Git:

2. Install Dependencies
Install the required Node.js packages for your application using npm:

3. Configuration
Create a configuration file (e.g., config.js) for your application to store environment-specific settings, like database connections and API keys.
Make sure to set the necessary environment variables, like the port on which your application will run.

4. Start your Node.js Application
Start your Node.js application using npm start.

5. CRUD Using Insomnia or Postman
Once you are connected to the server you can start to create, read, update and delete data from users and thoughts.

## Contributing
If you'd like to contribute to this project, definitely reach out!

## License
This project is licensed under the MIT License.
