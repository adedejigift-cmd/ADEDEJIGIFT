1.
If two ADAs exist, the shape of the JSON the client receives will be an Array 
findOne would behave differently because findOne is only used when returning only one student 
We use findOne when we need one student from the array, while we use find when we need all students matching each other
e.g like students having the same subject or class 

2.
we can use $regrex  $option i for case-sensitive and .trim() for trailing spaces

3.
The admin sees the old document, maybe because she put the req. params in another place, or she is not calling the endpoint correctly 
 Mongoose update was used incorrectly because findByIdAndUpdate() returns the old document by default,
so new: true returns the document after the update
runValidators: true should also be added to apply schema validation during the update. 
Fields that are not included in the update body are normally left unchanged; they are not deleted or reset.

4.
Valid ObjectId + student exist  = (200)ok response
Valid ObjectId + (!student) = (404)Not found, and findById should return null 
Invalid ID gives 500 because Mongoose expects the ID to be something it can cast into the schema
CastError means invalid ID because abc123 is not a valid MongoDB ID, so it throws CastError
document not found means that the ID exists, but it can not find that particular document

5.
The collection name should be students because MongoDB pluralizes or lowercases it when determining the model name
Why it matters is because MongoDB will search for a different collection name called "student", for example, instead of searching for "students," and if the "student" does not contain any information, you might incorrectly think the student does not exist and think the Api is empty

6.
POST /create-student fails if the client forgets Content-Type: application/json because Express tells the data, "that what I am sending is JSON." Without JSON, express.json() the data may not process the body as JSON
The one line responsible for app.js is app.use(express.json()) 
