const { DynamoDBClient } = require ("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand, DeleteCommand } = require ("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({region: "us-east-2"});

const documentClient = DynamoDBDocumentClient.from(client);

const TableName = "grocery_shopping_dynamodb_table";

//CRUD

//Create
async function createItem(grocery_item){ //param name switched to grocery_item
    const command = new PutCommand ({
        TableName,
        Item: grocery_item
    })

    try{
        await documentClient.send(command);
        return grocery_item;

    }catch(error){
        console.log(error);
    }
}

//name, price, purchased, quantity
//createItem({item_id: "a391db32-f9c4-442f-a4b6-82b1008a4fea", name: "grapes", price: 3, purchased: false, quantity: 1}); 
//createItem({item_id: "ac46210d-2377-410e-b956-e4db81abdee0", name: "oranges", price: 1, purchased: true, quantity: 10}); \
//createItem({item_id: "ac46210d-2377-410e-b956-e4db81abdee0", name: "oranges", price: 1, purchased: true, quantity: 10}); 

//Read
async function getItem(item_id){
    const command = new GetCommand ({
        TableName,
        Key: {item_id}
    })

    try{    
        const data = await documentClient.send(command);
        console.log(data.Item);
        return data.Item

    }catch(error){
        console.log(error);
    }
}

//getItem("a391db32-f9c4-442f-a4b6-82b1008a4fea");

//Update
async function updateItem (revised_grocery_item ){ //(item_id, revisedExpressions, revisedAttributeValues )
    const command = new PutCommand ({
        TableName,
        //Key: {item_id},
        Item: revised_grocery_item
        // UpdateExpression: revisedExpressions,
        // ExpressionAttributeValues: revisedAttributeValues

    })

    try{
        await documentClient.send(command);
        //const data = await documentClient.send(command);
        // console.log("Updated Item: ", data.Item)
        // console.log(data.Item);
        return revised_grocery_item;

    }catch(error){
        console.log("in error block");
        console.log(error);
    }
}

updateItem({item_id: "bce7a484-e39a-48d0-8fb3-ca522ce26838", name: "chocolate milk", price: 4, purchased: true, quantity: 2}); 
//updateItem({item_id: "bce7a484-e39a-48d0-8fb3-ca522ce26838"}, revisedExpressions, revisedAttributeValues); 
//updateItem("bce7a484-e39a-48d0-8fb3-ca522ce26838", {item_id: "bce7a484-e39a-48d0-8fb3-ca522ce26838", name: "chocolate milk", price: 4, purchased: true, quantity: 2}); 

//Delete
async function deleteItem (item_id){
    const command = new DeleteCommand ({
        TableName,
        Key: {item_id},
    })

    try{
        await documentClient.send(command);
        return item_id;

    }catch(error){
        console.log(error);
    }
}

//deleteItem("ac46210d-2377-410e-b956-e4db81abdee0");

module.exports = {
    createItem,
    getItem,
    updateItem,
    deleteItem
}