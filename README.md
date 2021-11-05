# RENTALX API 🚗💸

<p align="center">Application to control car rentals</p>

<h4 align="center">
	🚧  NodeJS Select 🚀 Under construction...  🚧
</h4>

### Features

- [x] User and account registration
- [x] Car registration
- [x] Available car listing
- [x] Car categories registration
- [x] Category listing
- [x] Car specification registration
- [x] Specification listing
- [x] Database access

### Prerequisites

Before starting, you will need to have the following tools installed on your machine.:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Besides, it's nice to have an editor to work with code like [VSCode](https://code.visualstudio.com/)

### 🎲 Running the Back End (server)

```bash
# Clone this repository
$ git clone <https://github.com/PauloRog/rentalx>

# Access the project folder in the terminal/cmd
$ cd rentalx

# Install dependencies
$ npm install

# Run the application in development mode
$ npm run dev:server

# The server will start on port:3333 - access <http://localhost:3333>
```
API access documentation: http://localhost:3333/api-docs/

### 🛠 Technologies

The following tools were used in the construction of the project:

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/#/)
- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)

### Business requirements and rules

# Car registration

**FR**
Should be possible to register a new car
Should be possible to list all categories

**BR**
Should not be possible to register a car with an existing license plate
Should not be possible to change the license plate of an already registered car
The car should be registered, by default, with availability
The user responsible for registration should be an administrator user


# Car listing

**FR**
Should be possible to list all available cars
Should be possible to list all available cars by category name
Should be possible to list all available cars by brand name
Should be possible to list all available cars by car name

# Car specification registration

**FR**
Should be possible to register a specification for a car
Should be possible to list all cars
Should be possible to register all specifications

**BR**
Should not be possible to register a specification for an unregistered car
Should not be possible to register an existing specification for the same car
The user responsible for registration should be an administrator user

# Car image registration

**FR**
Should be possible to register car image
Should be possible to list all cars

**NFR**
Use multer to upload files

**BR**
The user should be able to register more than one image for the same car
The user responsible for registration should be an administrator user

# Car rental

**FR**
Should be possible to register a rental

**BR**
The rent should have a minimum duration of 24 hours
Should not be possible to register a new rental if there is already one open for the same user
Should not be possible to register a new rental if there is already one open for the same car

# Recover Password

**FR**
Should be possible for the user to recover the password by entering the email
The user should receive an email with the step-by-step password recovery
User should be able to enter a new password

**BR**
User needs to enter a new password
Link sent for recovery must expire in 3 hours
