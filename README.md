# AWS Lambda Project

This project is an AWS Lambda function built using Node.js.

## Project Structure
This project demonstrates a fully serverless REST API built using AWS services. The architecture is designed to handle HTTP requests via API Gateway, execute backend logic in AWS Lambda, and persist or retrieve data from Amazon DynamoDB.
<img width="1048" height="290" alt="image" src="https://github.com/user-attachments/assets/e7dc4469-40f3-4588-b6d7-fb7bc5524dd0" />

-API Gateway: Exposes RESTful endpoints to accept HTTP requests (e.g. GET, POST, PUT, DELETE).

-Lambda: Stateless compute function that contains your backend logic. Triggered by API Gateway.

-DynamoDB: NoSQL key-value and document database to store and retrieve application data.


This project is licensed under the MIT License.
