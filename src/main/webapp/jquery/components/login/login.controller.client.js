(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new AdminUserServiceClient();
    $(main);


    // TODO also how do i link the pages together for the "Sign up" button.. and then do for register page too
    function main() { 
        $usernameFld = $('#username');
        $passwordFld = $('#password');
        $loginBtn = jQuery('#loginBtn');
        $loginBtn.click(login);
     }

    function login() { 
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
    
        // make JSON of user info
        var userObj = {
            username: usernameStr,
            password: passwordStr
        }
        
        var userObjStr = JSON.stringify(userObj)
        
        userService.login(userObjStr, null) // TODO   callback


        //TODO if this fails, just alert?

        //TODO if it doesn't, should i take them to ???
     }
})();
