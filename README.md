# Library-Management-System

A simple online library management system built with MongodDB, Express.js and Node.js.

## Technologies used in this application

### Front-end

1. HTML5
2. CSS3
3. BOOTSTRAP 4
4. jQuery

### Back-end

1. MongoDB
2. Express.js
3. Node.js
4. Passport.js

## Install dependencies

Open git bash or command line tools at application file and run following npm command or if you know what to do, just look at `package.json` file :)

`npm install passport passport-local passport-local-mongoose body-parser connect-flash ejs express express-santizer express-session method-override mongoose multer sharp uuid --save`

#### Install dev dependencies if needed

`npm install nodemon faker --save-dev`

## Run the application

- create a `.env` file in app directory
- add `SESSION_SECRET=<your session secret>`, `ADMIN_SECRET=<your admin secret>` and `DB_URL=<your mongodb url>` into that file.
- run `npm run dev`
- App will open at [http://localhost:3000](http://localhost:3000)

## Functionalitites

Whole app is divided into three modules.

- Admin
- User
- Browse books

### Admin module functionalities

- Sign up (This route is hidden. only accessible by typing the route manually and when admin log in)
- Login
- Logout
- Track all users activities
- Add books
- Update books
- Delete books
- Search books by category, title, author, ISBN
- Find users by firstname, lastname, email and username
- Delete user acount
- Restrict individual user if violate any terms and conditions
- Send notification to all/individual/filtered user (not ready yet, will be added as soon as I learn socket.io)
- Browse books showcase
- Update admin profile and password
- Add new admin
- Delete currently logged in admin profile

### User module functionalities

- Sign up
- Login
- Logout
- Track own activities
- Issue books
- Renew books
- Return books
- Pay fines (not ready yet, will be added asap)
- Browse books showcase
- Add, edit and delete comment on any books comment section
- Upload/Update profile picture
- Update profile and password
- Delete account

### Browse books module functionalities

This module can be accessed by anyone

- Show all books
- Find books on filtered search

## Project Screenshots

![ScreenShot](/Screenshots/1.png)
![ScreenShot](/Screenshots/2.png)
![ScreenShot](/Screenshots/3.png)
![ScreenShot](/Screenshots/4.png)
![ScreenShot](/Screenshots/5.png)
![ScreenShot](/Screenshots/6.png)
![ScreenShot](/Screenshots/7.png)
![ScreenShot](/Screenshots/8.png)
![ScreenShot](/Screenshots/9.png)
![ScreenShot](/Screenshots/10.png)
