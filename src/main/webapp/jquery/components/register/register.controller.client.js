(function () {
    //equivalant to var $usernameFld = jQuery('username')
    var $usernameFld, $passwordFld, $password2Fld;
    var $registerBtn;

    var userService = new UserService();
    $(main);

    function main() {
        $usernameFld = $('#username');
        $passwordFld = $('#password');
        $password2Fld = $('#password2');
        $registerBtn = jQuery('#registerBtn');
        $registerBtn.click(registerHandler);
    }
    
    function registerHandler() {
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
        var password2Str = $password2Fld.val();
    
        // make JSON of user info
        var userObj = {
            username: usernameStr,
            password: passwordStr,
            password2: password2Str
        }
        
        var userObjStr = JSON.stringify(userObj)
        
        userService.register(userObjStr, null) // TODO: how to get callback
        
        // TODO what to do when username taken? just alert?
    }
})();

