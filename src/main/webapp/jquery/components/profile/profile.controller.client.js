(function () {
    //equivalant to var $usernameFld = jQuery('username')
    var $usernameFld, $phoneFld, $emailFld, $roleFld, $dobField;
    var $updateBtn, $logoutBtn;

    var userService = new UserService();
    $(main);

    function main() {

        //TODO is there a wy to prepop info? do i need to?
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
            dateOfBirth: dobStr //TODO format for dob? aka camel
        }
        
        var userObjStr = JSON.stringify(userObj);
        
        userService.updateProfile(userid, userObjStr, null) // TODO: how to get callback AND id :/

        //TODO show success when success update
    }

    function logoutHandler() {
        //TODO just to be sure, idc who i log out bc there's only one so that's who i do???
        userService.updateUser(null) // TODO: how to get callback
    }
})();

