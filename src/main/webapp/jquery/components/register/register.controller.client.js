(function () {
    var $usernameFld, $passwordFld, $password2Fld;
    var $registerBtn;

    var userService = new UserService();
    $(main);

    //TODO show error if username is taken

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

        //TODO ensure same pwds
    
        // make JSON of user info
        var userObj = {
            username: usernameStr,
            password: passwordStr,
            password2: password2Str
        }
        
        var userObjStr = JSON.stringify(userObj)
        
        userService.register(userObjStr).then(registrationSuccessful, registrationSuccessful); // TODO: how to get callback
        
    }

    function registrationSuccessful() {
        alert('yay');
        window.location.href = '/../profile/profile.template.client.html';
    }

    //TODO use this
    function registrationFailed() {
        alert('oops');
    }
})();

