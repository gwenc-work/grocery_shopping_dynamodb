const itemService = require("./service/itemService");

// itemService.createItem("melon", 2, false, 6 ) //name, price, purchased, quantity //"banana", 3, false, 6
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

//"107a6088-2b6b-4ada-870c-4beeea37d815"
// itemService.getItemById("8efd0250-6c52-43df-9e0d-2b7c44d9f51b")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

//"bce7a484-e39a-48d0-8fb3-ca522ce26838"
//bce7a484-e39a-48d0-8fb3-ca522ce26838
itemService.updateItem("bce7a484-e39a-48d0-8fb3-ca522ce26838","chocolate milk", 5, true, 10 )
    .then(data => console.log(data))
    .catch(error => console.log(error));


// itemService.deleteItem("51c8faf4-0e7d-4d88-9d19-05d5ddc1e210")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));