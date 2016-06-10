# Vendr

  Vendr is an auction site for buying and selling new and used items.

## Table of Contents
1. [Usage](#Usage)
2. [Getting started](#Getting-Started)
  1. [Clone the latest version](#Installing-Dependencies)
  2. [Install dependencies](#Installing-Dependencies)
  3. [Run the application](#Run-Application)
3. [Tech Stack](#Tech-Stack)
4. [Team](#Team)
5. [Contributing](#Contributing)
6. [License](#License)

## Usage

Landing Page:
![landing_page](https://raw.githubusercontent.com/crypticzoologists/vendr/master/landing_page.png)

Personal Page:
![personal_page](https://raw.githubusercontent.com/crypticzoologists/vendr/master/personal_page.png)

Sell an Item:
![sell_item](https://raw.githubusercontent.com/crypticzoologists/vendr/master/sell_item.png)

Search Results:
![search_results](https://raw.githubusercontent.com/crypticzoologists/vendr/master/search_results.png)

## Getting started

#### 1. Clone the latest version

  Start by cloning the latest version of Sentimize on your local machine by running:

  ```sh
  $ git clone https://github.com/crypticzoologists/vendr.git
  $ cd vendr
  ```

#### 2. Install Dependencies
  From within the root directory run the following command to install all dependencies:

  ```sh
  $ npm install
  ```

#### 3. Run the application

  1. Run the following command in your terminal to bundle your files using Webpack:

  ```sh
  $ webpack --watch
  ```

  2. Setup your mySQL connection by changing the password within db/config.js to match your local mySQL password

  3. In a new terminal window run the following command to start the application:

  ```sh
  $ node server/app.js
  ```

  After that open in your browser the localhost with your chosen port, e.g. ``` http://localhost:3000/ ``` to access the application.

## Tech Stack

##### Front end:
- React
- Redux
- Webpack
- Babel

##### Back end:
- Node
- Express
- Bookshelf/Knex
- MySQL
- Passport
- Socket.io

<!-- ## Directory Layout
```
├── /env/                       # Environment variables
├── /node_modules/              # 3rd-party libraries and utilities
├── /client/                    # Client source code
│   ├── /build/                 # Build file produced with Browserify
│   ├── /components/            # React components
│     ├── /home-view/           # Home view components
│     ├── /main-layout/         # Main Layout components
│     ├── /record-view/         # Record view components
│     ├── /report-view/         # Reporting view components
│     ├── /App.jsx/             # Main React App
│   ├── /lib/                   # Lib files, e.g. from FACE API
│   ├── /style/                 # CSS Style files
│   ├── /index.jsx              # Index file to attach React to DOM
├── /server/                    # Server source code
│   ├── /config/                # Initial server config files
│   ├── /controllers/           # Controllers for database interaction
│   ├── /lib/                   # Lib for util functions
│   ├── /models/                # Data models
│   ├── /routes/                # Routes for incoming GET and POST requests
│   ├── /views/                 # Jade templating views
│   └── /server.js              # Server-side startup script
├── /test/                      # Server and client side tests
│   ├── /client/                # Client side tests
│   ├── /server/                # Server side tests
|   ├── /data/                  # Holds seed & dummy data
└── package.json                # List of 3rd party libraries and utilities to be installed
└── .babelrc                    # Babel presets
└── .eslintrc                   # ESLint settings
``` -->

## Team
  - Product Owner:            [Chris Ng](https://github.com/chrisng93)
  - Scrum Master:             [Will Tang](https://github.com/willwtang)
  - Development Team Members: [Chris Ng](https://github.com/chrisng93), [Will Tang](https://github.com/willwtang), [Daniel Rabinovich](https://github.com/Drabin)

## Contributing

  1. Fork the repo.
  2. Clone it to your local computer
  3. Cut a namespaced feature branch from master and name it appropriately
  4. Make commits and prefix each commit with the type of work you were doing
  5. BEFORE PUSHING UP YOUR CHANGES, rebase upstream changes into your branch, fix any potential conflicts, and then push to your fork.
  6. Submit a pull request directly to the master
  7. Someone else will perform code review to keep codebase clean
  8. Fix any errors or issues raised by the reviewer and push the fixes as a single new commit
  9. Repeat until the pull request is merged.

See [CONTRIBUTING.md](_CONTRIBUTING.md) for contribution guidelines in detail.

## License

M.I.T
