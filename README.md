# Wizzcad-test
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5 and [Angular Material](https://material.angular.io/) version 12.0.5.  
It run with bootstrap version 4.  
It use [wizzcad api](http://demo.wizzcad.com:8081) for data

## Features
### Session
On first run, choose an available user to access to the app. By clicking the "CONNECT" button, it get user's token and stock it in web browser local storage to log in  
To log out, click on the top right corner button  
Some page are not allowed to navigate when user is not connected 

### View mode
User can change view mode with slide button at the top right corner

#### Grid view
First box let user sort result by name with checkbox, and search by name in all result  
Results are loaded by scrolling  
"Show" button navigate to single result page who use url parameters to find data by id  
When user start scrolling, a navigate to top button appear

#### Datatable view
Page use Materials datatable to load all data. User can search data with input and sort data by selecting table header.

### Externals mobules
This project use some externals modules for better user navigation :
* ng-http-loader  
Show loading logo while http call not ended
* ngx-infinite-scroll  
Load result while user is scrolling th e page
* ngx-json-viewer  
Json viewer


