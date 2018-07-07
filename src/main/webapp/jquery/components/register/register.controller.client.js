(function () {
    //equivalant to var $usernameFld = jQuery('username')
    var $usernameFld = $('#username');  // # to get id
    var $passwordFld = $('#password');
    var $password2Fld = $('#password2');

    // TODO: why do i need following two lines??? (main isnt even defined rn but what would go in it?)
    var userService = new UserService();
    $(main);

    var $registerBtn = jQuery('#registerBtn');
    $registerBtn.click(registerHandler);
    
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
        
        fetch('/api/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
})();

