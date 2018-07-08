(function () {
    //equivalant to var $usernameFld = jQuery('username')
    var $usernameFld, $phoneFld, $emailFld, $roleFld, $dobField;
    var $updateBtn, $logoutBtn;

    var userService = new UserService();
    $(main);

    function main() {
        $usernameFld = $('#username');  
        $phoneFld = $('#phone');
        $emailFld = $('#email');
        $roleFld = $('#role');
        $dobFld = $('#dob');
        $updateBtn = jQuery('#updateBtn');
        $updateBtn.click(updateHandler);
        $logoutBtn = jQuery('#logoutBtn');
        $logoutBtn.click(logoutHandler);
    }
    
    function updateHandler() {
        var usernameStr = $usernameFld.val();
        var phoneStr = $phoneFld.val();
        var emailStr = $emailFld.val();
        var roleStr = $roleFld.val();
        var dobStr = $dobFld.val();
    
        // make JSON of user info
        var userObj = {
            username: usernameStr,
            phone: phoneStr,
            email: emailStr,
            role: roleStr,
            dateOfBirth: dobStr //TODO format for dob?
        }
        
        var userObjStr = JSON.stringify(userObj);
        
        userService.updateProfile(userObjStr, null) // TODO: how to get callback
    }

    function logoutHandler() {
        var usernameStr = $usernameFld.val(); //TODO is this necessary or do i just logout whoever is in
        var userObj = {
            username: usernameStr
        }

        var userObjStr = JSON.stringify(userObj);
        userService.updateUser(userObjStr, null) // TODO: how to get callback
    }
})();

