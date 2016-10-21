# Tam's GitHub Username Search

#### An application that searches GitHub usernames, 10.14.2016

#### By Tam Nguyen

## Description

This project contains a form input that takes a username and outputs GitHub information. This utilizes GitHub's API key to retrieve data information from GitHub. This will display username, full name, GitHub link, total public repository count, and information about each repository.

## BDD Specifications

| Behavior                                                | Input         | Output    |
| --------------------------------------------------------|:-------------:| ---------:|
| It returns your username                                | Tamothy       | "Tamothy"    |
| It returns your first and last name                     | Tamothy       | "Tam Nguyen"|
| It returns a GitHub URL link                            | Tamothy       | "https://github.com/Tamothy"  |
| It returns total public repositories                    | Tamothy       | 42 |
| It returns information about repository                 | Tamothy       | "Name: address_book" "Description: An address book made using objects." |

## Setup/Installation Requirements

* Check out the GitHub page: https://tamothy.github.io/github_user_lookup_project_one
* Download or clone repository
* Make sure to obtain an API key from GitHub and store into an .env file at the top level of the directory
* Install packages with `$ npm install` and `$ bower install`
* Run program with `$ gulp serve`

## Known Bugs

No known bugs

## Support and contact details

Tam Nguyen's email: mr.tamron@gmail.com

## Technologies Used

HTML

CSS

JavaScript

jQuery

Node

Gulp

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **Tam Nguyen**
