const accountId = 23452;
let accountEmail = "dev@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 34223 // not allowed
accountEmail = "devbanna@gmail.com"
accountPassword = "29392"
accountCity = "Delhi"


/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState
])