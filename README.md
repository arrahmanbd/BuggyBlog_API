# 👌BuggyBlog_API 
APIs, or Application Programming Interfaces, allow different software systems to communicate with each other. I have created a simple Blogging API that allows users to authenticate, create blog posts, get all blog posts, and get a particular blog post. I have also implemented routes that allows users to signup for a blogging account, and log into their accounts. Password encryption and Json Web Token Mechanism added for extra security.
More feature coming soon.🤙
# How to use
## Install packages. Run this command for installing dependency:
```
npm install express mongoose bcrypt dotenv jsonwebtoken c
ors validator nodemon
```
## Start the server:
```
npm run-script dev
```
# API End Points:
REST-API ready to respond to your requests. Here is the common end points of this server.

## /api/v1/
    [POST] /signup  == Create User account using  name,email & password(6)
    [POST] /login  == Login User using email & password(6)
    [GET] /  == Get all users Info
## /api/v1/blog/
    [POST] /create  == Create a post with(title,content) & Authentication Header
    [GET] /posts  == Get All Posts. Max-10/Page
    [POST] /:postId  == Get a single post by ID
    [PUT] /:postId  == Update a post by ID and Header Auth Token
    [DELETE] /:postId  == Delete a post by ID and Header Auth token

## 🔗 Follow
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://arrahmanbd.github.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/arrahmanbd)
[![linkedin](https://img.shields.io/badge/Github-22272e?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/arrahmanbd)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.