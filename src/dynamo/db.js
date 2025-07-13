const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, PutCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({ region: process.env.AWS_REGION || 'us-east-1' });
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.TABLE_NAME || "Task";

async function getTask(taskId) {
    const params = {
        TableName: TABLE_NAME,
        Key: { id: taskId },
    };
    try {
        const data = await docClient.send(new GetCommand(params));
        return data.Item;
    } catch (error) {
        console.error("Error getting task:", error);
        throw new Error("Could not retrieve task");
    }
}

async function putTask(task) {
    const params = {
        TableName: TABLE_NAME,
        Item: task,
    };
    try {
        await docClient.send(new PutCommand(params));
        return task;
    } catch (error) {
        console.error("Error putting task:", error);
        throw new Error("Could not create task");
    }
}

async function deleteTask(taskId) {
    const params = {
        TableName: TABLE_NAME,
        Key: { id: taskId },
    };
    try {
        await docClient.send(new DeleteCommand(params));
        return { id: taskId };
    } catch (error) {
        console.error("Error deleting task:", error);
        throw new Error("Could not delete task");
    }
}

module.exports = {
    getTask,
    putTask,
    deleteTask,
    TABLE_NAME,
};