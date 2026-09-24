1.
if two ada exist the shape of json the client receives will be in an Array 
findone would behave differently because findone is only use when returning only one student 
we use fineone when we need one student from the array while we use find when we need all student matching each other
e.g like student having the same subject or class 

2.
we can use $regrex  $option i for case-sensitive and .trim() for trailing spaces

3.
the admin sees the old document maybe because she put the req.params in another place or she is not calling the endpoint correctly 
 Mongoose update was use incorectly because findByIdAndUpdate() returns the old document by default,
so new: true returns document after the update
runValidators: true should also be added to apply schema validation during the update. 
Fields that are not included in the update body are normally left unchanged; they are not deleted or reset.

4.
ValidObjectId + stundent exist  = (200)ok response
ValidObjectId + (!student) = (404)Not found and findByid should return null 
invalid  id gives 500 because mongoose expect the id to be something it can cast into the schema
CastError means invalid id because abc123 is not a valid mondodb id so it throws CastError
document not found means that the id exist but it can not find that particular document

5.
The collection name should be students because mongodb pluralize or lowercase it when determining the model name
why it matters is because Mongodb will search for a different collection name called "student" for example instead of searching for "students" and if the "student" does not contain any information you might incorectly think the student does not exist and think the Api is empty

6.
POST /create-student fails if the client forgets Content-Type: application/json because express tells the data "that what i am sending is JSON" because Without JSON the express.json() the data may not process the body as JSON
the one line responsible for app.js is the app.use(express.json()) 