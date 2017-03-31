# angular2-spring-maven-sample
This is an example of a multi-module Maven project with Spring Boot backend and Angular 2 frontend.
The Angular app is configured to proxy API requests to http://localhost:8080/api/*. 
So both backend and frontend need to be run simultaneously.

## How to use
Clone or download the source code and run Maven build 

    mvn install

That will download install local copy of Node.js and download npm packages.

Navigate to backend and run it.

    cd backend
    mvn spring-boot:run

Navigate to frontend module and start the application:

    cd frontend
    npm start

*NB!* If you want to run `ng serve`, don't forget to add `--proxy-config proxy.conf.json` argument. 
Otherwise the frontend will not be able to communicate to the backend. 
    
Open in browser [http://localhost:4200](http://localhost:4200).
   
    



 

