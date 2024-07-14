##API DEPLOYED ON RENDER###
##LOGIN GET REQUEST
API: https://jobapplicationtracker-8k5u.onrender.com/api/v1/auth/login
Request body: JSON object
{   
   "email":"userEmail", 
   "password":"userPassword"
}
Success Response: JSON object
{
    "success": boolean,
    "data": {
        "user": {
            "username": "username",
            "email": "user email"
        },
        "jwtToken": "JWT token string"
    }
}
Error Resonse: JSON object
{
    "success": boolean,
    "error": "Error message string"
}

##REGISTER POST REQUEST
API: https://jobapplicationtracker-8k5u.onrender.com/api/v1/auth/register
Request body: JSON object
{   
   "email":"user email",
   "username":"username",
   "password":"user password"
}
Success Response: JSON object
{
    "success": boolean,
    "data": {
        "user": {
            "username": "provided username",
            "email": "useEmail"
        },
        "jwtToken": "JWT token string"
    } //object
}
Error Resonse: JSON object
{
    "success": boolean,
    "error": "Error message string"
}

##POST JOB  REQUEST
API: https://jobapplicationtracker-8k5u.onrender.com/api/v1/jobs
Request body: JSON object
{   
   "company":"companyName string", //required
   "position":"jobPosition string", //required
   "status":"pending" //string enum:['pending','interview','declined'] //optional
}
Response: JSON object
{
    "success": boolean,
    "data": {
        "company": "companyName string",
        "position": "jobPosition string",
        "status":"pending" //string enum:['pending','interview','declined']
        "createdBy": "userId",
        "_id": "jobId",
        "createdAt": "Date string",
        "updatedAt": "Date string",
    } //object
}
Error Resonse: JSON object
{
    "success": boolean,
    "error": "Error message string"
}

##GET JOB LIST  REQUEST
API: https://jobapplicationtracker-8k5u.onrender.com/api/v1/jobs
Request body: JSON object
null
Response: JSON object
{
    "success": boolean,
    "data": {
        "company": "companyName string",
        "position": "jobPosition string",
        "status":"pending", //string enum:['pending','interview','declined']
        "_id": "jobId",
        "createdAt": "Date string",
        "updatedAt": "Date string",
    }[] //object array
}
Error Resonse: JSON object
{
    "success": boolean,
    "error": "Error message string"
}

##GET SINGLE JOB REQUEST
API: https://jobapplicationtracker-8k5u.onrender.com/api/v1/jobs/:jobId
Request body: JSON object
null
Response: JSON object
{
    "success": boolean,
    "data": {
        "company": "companyName string",
        "position": "jobPosition string",
        "status":"pending", //string enum:['pending','interview','declined']
        "_id": "jobId",
        "createdAt": "Date string",
        "updatedAt": "Date string",
    } //object
}
Error Resonse: JSON object
{
    "success": boolean,
    "error": "Error message string"
}

##PATCH JOB  REQUEST
API: https://jobapplicationtracker-8k5u.onrender.com/api/v1/jobs/:jobId
Request body: JSON object
{   
   "company":"companyName string", //optional
   "position":"jobPosition string", //optional
   "status":"pending" //string enum:['pending','interview','declined'] //optional
}
Response: JSON object
{
    "success": boolean,
    "data": {
        "company": "updated companyName string",
        "position": "updated jobPosition string",
        "status":"pending" //(updated)string enum:['pending','interview','declined'] 
        "createdBy": "userId",
        "_id": "jobId",
        "createdAt": "Date string",
        "updatedAt": "Date string",
    } //object
}
Error Resonse: JSON object
{
    "success": boolean,
    "error": "Error message string"
}

##DELETE SINGLE JOB REQUEST
API: https://jobapplicationtracker-8k5u.onrender.com/api/v1/jobs/:jobId
Request body: JSON object
null
Response: JSON object
{
    "success": boolean,
    "data": {
        "company": "companyName string",
        "position": "jobPosition string",
        "status":"pending", //string enum:['pending','interview','declined']
        "_id": "jobId",
        "createdAt": "Date string",
        "updatedAt": "Date string",
    } //object
}
Error Resonse: JSON object
{
    "success": boolean,
    "error": "Error message string"
}
