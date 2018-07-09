(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() { 
        $usernameFld = $('#username');
        $passwordFld = $('#password');
        $loginBtn = jQuery('#loginBtn');
        $loginBtn.click(login);
     }

    function login() { 
        alert("hi");
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
    
        // make JSON of user info
        var userObj = {
            username: usernameStr,
            password: passwordStr
        }
        
        var userObjStr = JSON.stringify(userObj)
        
        //TODO idk if user service returning the right thing so i can then
        userService.login(userObjStr, null).then(loginSuccessful, loginFailed) // TODO   callback


        //TODO if this fails, just alert?

        //TODO if it doesn't, should i take them to ???
     }

     function loginSuccessful() {
        alert('yay');
        window.location.href = '/profile.template.client.html';
    }

    function loginFailed() {
        alert('oops');
    }
})();
