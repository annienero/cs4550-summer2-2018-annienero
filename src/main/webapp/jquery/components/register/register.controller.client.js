// alert('Hello from register controller')

// var h1 = jQuery('h1')
// h1.css('color', 'red')

//register button clicks

var registerBtn = jQuery('#registerBtn') // # to get id
registerBtn.click(function () {
console.log('let goooo')
})


//grab input fields

//var usernameFld = jQuery('username') vvv equivalant
var usernameFld = $('#username')
var passwordFld = $('#password')
var password2Fld = $('#password2')


function registerHandler() {
var usernameStr = usernameFld.val()
var passwordStr = passwordFld.val()
var password2Str = password2Fld.val()

console.log(usernameStr)
console.log(passwordStr)

// make JSON for user info
var userObj = {
username: usernameStr,
password: passwordStr,
password2: password2Str
}

var userObjStr = JSON.stringify(userObj)

//console.log(userObj)

fetch('/api/register', {
method: 'post',
body: userObjStr,
headers: {
'Content-Type': 'application/json'
}
})


}

registerBtn.click(registerHandler)