# Serverless Task Manager

A fully serverless REST API built on AWS using Node.js, designed to manage tasks efficiently without managing servers.

---

## Overview

This project implements a scalable, cost-effective task management backend using AWS services:

- **API Gateway** to expose RESTful HTTP endpoints  
- **AWS Lambda** functions to run your backend business logic in a serverless environment  
- **Amazon DynamoDB** for fast, flexible NoSQL data storage and retrieval  

The architecture allows you to focus on your application logic while AWS handles infrastructure, scaling, and availability.

---

## Architecture Diagram

![Serverless Architecture](https://github.com/user-attachments/assets/e7dc4469-40f3-4588-b6d7-fb7bc5524dd0)

---

## Features

- Create, read, update, and delete tasks via REST API  
- Serverless and event-driven with pay-per-use pricing  
- Minimal maintenance overhead — no servers to provision or manage  

---

## Project Structure

- **API Gateway:** Manages HTTP requests and routes them to Lambda functions.  
- **Lambda Functions:** Stateless compute logic written in Node.js, triggered by API Gateway events.  
- **DynamoDB:** Stores task data as key-value/document entries, optimized for fast reads/writes.


---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
