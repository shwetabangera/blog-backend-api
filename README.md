# blog-backend-api-

This is node application used to fetch all blogs from json file and can get a specific blog using the id.<br>
It have modules such as for reading files we are using ("fs") and for specifying path of folder we need module as ("path") for getting json file.<br>

# To run this application follow steps:<br>

Type git clone, and then paste the URL you copied earlier.<br>

$ git clone https://github.com/shwetabangera/blog-backend-api.git <br>

Press Enter to create your local clone.<br>

Now navigate to the folder where the repository has been cloned.<br>

After cloning repository use command ->npm install<br>

After that use command ->node app.js<br>
Once it shows "Server is started on port 3000" than open POSTMAN.<br>

POSTMAN makes API development easy.<br>

Add a new request to run server and type: http://localhost:3000<br>
#To test blogs
-for getting all blogs type --> http://localhost:3000/blogs<br>
-for getting specific blog id type -->http://localhost:3000/blogs?:anyid<br>
(here any id can by copied form blogs.json file)<br>
-for getting specific query parameter type-->http://localhost:3000/blogs?author=anyauthorname<br>

# Technologies and Tools Used:<br>

1.Nodejs<br>
2.Javascript<br>
3.Express<br>
4.Postman<br>
