(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new UserService();
    $(main);

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
        
        userService.login(userObjStr).then(loginSuccess, loginFailure);


    }

    function loginSuccess() {
        window.location.href = '/jquery/components/profile/profile.template.client.html';
    }

    function loginFailure() {
        alert('bad login credentials');
    }
})();
