# Flight searching MEAN.IO test application
  
  Developed By : Rajmohan G
  
  Date: 30-10-2015
  
  https://github.com/rajmohang111/flight-booking-app
  
  Created Mean application called MeanApp using Nodejs, ExpressJs, AngularJs, MongoDB
  
  Application contains two pages.
```
	1. Home page
	2. Flight Search result page.
 ```
 
 Using express we are staring the application using following command.

	```
	node server
	```
 
  ```
  Application will start running at port 8080
  ```
  
  Express will redirect application to default page client/views/index.html.
  
  All angular, Js and css files are included in this page.
  
  By default angular /home route will be called and it will make a web API call to node server to get all flights details from MongoDB.
  
  ```
  API/flights GET method
  ```
  
  From the API result Origin and Destination flights details will be populated.
  
  When user type 2 characters in the Origin and Destination field angular will filter the flight name and show matched result to the user.
  
  User can select corresponding flights from this list.
  
  User need to also select travel date and number of passenger
  
  No of passenger should be always more than 0.
  
  User can click on +1 and -1 button to increment and decrement the number of passenger
  
  All the fields are mandatory and HTML 5 form validation is applied for the fields.
  
  After entering all the fields user can click on Search button.
  
  Angular will call searchFlight function in bookingController.
  
  Which will get the source and destination airport code of selected airport and get the date and number of passenger.
  
  It will create a new angular URL on following pattern.
  
  ```  
  http://localhost:8080/#/flight-search-page/ALM-DSM/2015-5-30/1passenger
  ```
  
  Angular route will activated and redirect to result page.
  
  Which is similar to home page but also contain a table in the right side of the page.
  
  When the route is changed angular will make a web API call to node server to get the serach result.
  
  ```
  API/flights POST
  ```
  
  Node server will get one random flight record from the mongoDB collection flights and return to the controller.
  
  This result will be displayed in bootstrap table in the result page.
  
  User can again change the search criteria and click on search button, application will again find a random result from the DB.
  
  The search criteria will be saved in local storage and displayed in the form all the time.
  
  
  
  
  
  
	