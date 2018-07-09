(function () {
    //equivalant to var $usernameFld = jQuery('username')
    var $usernameFld, $firstNameFld, $lastNameFld, $phoneFld, $emailFld, $roleFld, $dobFld;
    var $updateBtn, $logoutBtn;

    var userService = new UserService();
    $(main);

    function main() {
        $usernameFld = $('#username'); 
        $firstNameFld = $('#firstName'); 
        $lastNameFld = $('#lastName');  
        $phoneFld = $('#phone');
        $emailFld = $('#email');
        $roleFld = $('#role');
        $dobFld = $('#dob');
        $updateBtn = $('#updateBtn');
        $updateBtn.click(updateHandler);
        $logoutBtn = $('#logoutBtn');
        $logoutBtn.click(logoutHandler);

        var userObj;
        
        userService.getCurrentUser().then(function(response) {
            // response.json() parses the data once the server responds with data and this can be used as any other object on client-side
            userObj = response.json();
        });

        renderUser(userObj);
    }

    function renderUser(userObj) {
        $usernameFld.val(userObj.getUsername)
        $firstNameFld.val(userObj.getFirstName);
        $lastNameFld.val(userObj.getLastName);
        $phoneFld.val(userObj.getPhone);
        $emailFld.val(userObj.getEmail);
        $roleFld.val(userObj.getRole);
    }
    
    function updateHandler() {
        var firstNameStr = $firstNameFld.val();
        var lastNameStr = $lastNameFld.val();
        var phoneStr = $phoneFld.val();
        var emailStr = $emailFld.val();
        var roleStr = $roleFld.val();
        var dobStr = $dobFld.val();
    
        // make JSON of user info (don't change username)
        var userObj = {
            first_name: firstNameStr,
            last_name: lastNameStr,
            phone: phoneStr,
            email: emailStr,
            role: roleStr,
            date_of_birth: dobStr
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

