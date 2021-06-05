# README

# Installation

### Prerequisites
* You will need to have ruby version 2.5.1 already installed or install using a ruby version manager such as rvm or rbenv
* Postgres
* yarn

* Clone this repository by running the command
`git clone https://github.com/monsieurkayode/cafe_react.git`

* After successfully cloning the project:
`cd cafe_react`

* To Install dependecies.
`bundle install`

* Create database
  - Provide ENV variables for database username and password in `config/database.yml`
  - Run `rake db:setup` to create, run migrations and seed the database

### Starting the app
* To start the app locally run the following commands 
`rails s` followed by `bin/webpack-dev-server`

