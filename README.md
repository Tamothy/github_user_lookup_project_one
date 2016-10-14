# Tam's GitHub Username Search

#### An application that searches GitHub usernames, 10.14.2016

#### By Tam Nguyen

## Description

This project contains a form input that takes a username and outputs GitHub information. This utilizes GitHub's API key.

## BDD Specifications

| Behavior                                                | Input         | Output    |
| --------------------------------------------------------|:-------------:| ---------:|
| It returns your username                                | Tamothy       | "Tamothy"    |
| It returns your first and last name                     | Tamothy       | "Tam Nguyen"|
| It GitHub URL link                                      | Tamothy       | "https://github.com/Tamothy"  |
| It total public repositories                            | Tamothy       | 42 |

## Setup/Installation Requirements

* Download or clone repository
* Make sure to obtain an API key from GitHub and store into an .env file at the top level of the directory
* Install Node Project Manager
* Install the development dependencies in package.json
* Don't forget to push to remote repository

## Known Bugs

There was an issue with implementing a custom styles.css file with bower installed, and because of this, we linked the styles.css file in index.html while also keeping the bower bootstrap files.

## Support and contact details

Tam Nguyen's email: mr.tamron@gmail.com

## Technologies Used

HTML

CSS

JavaScript

JQuery

### License

This software is licensed under the MIT license.

Copyright (c) 2016 **Tam Nguyen**
