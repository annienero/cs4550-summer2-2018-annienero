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

        if (passwordStr == "") {
            alert("Set a username");
            return;
        }
        if (passwordStr == "") {
            alert("Set a password");
            return;
        }
        if (passwordStr != password2Str) {
            alert("Passwords do not match");
            return;
        }
    
        // make JSON of user info
        var userObj = {
            username: usernameStr,
            password: passwordStr,
            password2: password2Str
        }
        
        var userObjStr = JSON.stringify(userObj)
        userService
            .register(usernameStr, userObjStr)
            .then(registrationSuccessful);
    }

    function registrationSuccessful() {
        window.location.href = '/jquery/components/profile/profile.template.client.html';
    }
})();

