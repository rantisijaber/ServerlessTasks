const { getTask, putTask, deleteTask } = require('../dynamo/db');

exports.lambdaHandler = async (event, context) => {
    // Process the incoming event
    console.log("Received event:", JSON.stringify(event, null, 2));

    if (event.httpMethod === 'GET') {
        const taskId = event.pathParameters.id;
        const task = await getTask(taskId);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Task retrieved successfully",
                task,
            }),
        };
    }

    if (event.httpMethod === 'POST') {
        const task = JSON.parse(event.body);
        await putTask(task);
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Task created successfully",
            }),
        };
    }

    if (event.httpMethod === 'DELETE') {
        const taskId = event.pathParameters.id;
        await deleteTask(taskId);
        return {
            statusCode: 204,
            body: JSON.stringify({
                message: "Task deleted successfully",
            }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda!",
            input: event,
        }),
    };
};