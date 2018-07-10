(function () {
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

        //TODO ensure same pwds

        // make JSON of user info
        var userObj = {
            username: usernameStr,
            password: passwordStr,
            password2: password2Str
        }

        var userObjStr = JSON.stringify(userObj)

        // TODO return from service for then????????????
        userService.register(userObjStr, null).then(registrationSuccessful, registrationFailed); // TODO: how to get callback
    }

    function registrationSuccessful() {
        alert('yay');
        window.location.href = '/jquery/components/profile/profile.template.client.html';
    }

    function registrationFailed() {
        alert('oops');
    }
})();

