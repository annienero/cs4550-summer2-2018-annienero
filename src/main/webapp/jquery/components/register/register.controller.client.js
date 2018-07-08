(function () {
    //equivalant to var $usernameFld = jQuery('username')
    var $usernameFld, $passwordFld, $password2Fld;
    var $registerBtn;

    // TODO: why do i need user service?
    var userService = new UserService();
    $(main);

    function main() {
        //equivalant to var $usernameFld = jQuery('username')
        $usernameFld = $('#username');  // # to get id
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

