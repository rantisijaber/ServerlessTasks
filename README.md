# AWS Lambda Project

This project is an AWS Lambda function built using Node.js. It serves as a template for creating serverless applications on AWS.

## Project Structure

```
aws-lambda-project
├── src
│   ├── handler.js         # Entry point for the Lambda function
│   └── utils
│       └── index.js       # Utility functions
├── package.json            # NPM configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd aws-lambda-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

## Usage

To invoke the Lambda function locally, you can use the following command:

```
node src/handler.js
```

## Deployment Guidelines

1. **Configure AWS CLI:**
   Make sure you have the AWS CLI installed and configured with your credentials.

2. **Deploy the Lambda function:**
   You can deploy the function using the AWS Management Console or AWS CLI. If using the CLI, you can package your function and deploy it with the following commands:

   ```
   zip -r function.zip .
   aws lambda create-function --function-name <function-name> --zip-file fileb://function.zip --handler src/handler.lambdaHandler --runtime nodejs14.x --role <role-arn>
   ```

3. **Update the function:**
   If you make changes to your code, you can update the function with:

   ```
   aws lambda update-function-code --function-name <function-name> --zip-file fileb://function.zip
   ```

## License

This project is licensed under the MIT License.