(function () {
    //equivalant to var $usernameFld = jQuery('username')
    var $usernameFld, $phoneFld, $emailFld, $roleFld, $dobFld;
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

         //TODO idk what id is..it would make more sense to just get curuser from session....
        //TODO also userservice prob not returning anything
        // response.json() parses the data once the server responds with data and this can be used as any other object on client-side
        var userObj;
        
        //TODO getCurrentUser doesnt exist yet.... also need to properly prepop
        userService.getCurrentUser(userId).then(function(response) {
            userObj = response.json();
        });

        renderUser(userObj);
    }

    function renderUser(userObj) {
        $usernameFld.val(userObj.getUsername);
        $phoneFld.val(userObj.getPhone);
        $emailFld.val(userObj.getEmail);
        $roleFld.val(userObj.getRole);
        
        //TODO user fields aren't all the same everywhere and it's gross (prob just use all)
    }
    
    function updateHandler() {
        var phoneStr = $phoneFld.val();
        var emailStr = $emailFld.val();
        var roleStr = $roleFld.val();
        var dobStr = $dobFld.val();
    
        // make JSON of user info (don't change username)
        var userObj = {
            first_name: "need", //TODO
            last_name: "need",
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

