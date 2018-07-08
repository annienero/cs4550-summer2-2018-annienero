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
        var usernameStr = $usernameFld.val();
        var passwordStr = $passwordFld.val();
    
        // make JSON of user info
        var userObj = {
            username: usernameStr,
            password: passwordStr
        }
        
        var userObjStr = JSON.stringify(userObj)
        
        // TODO: is this a post or wtf... all i wanna do is start it
        fetch('/api/login', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        });
     }
})();
