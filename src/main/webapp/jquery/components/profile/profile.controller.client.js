(function () {
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
        $roleFld = $('#roleFld');
        $dobFld = $('#dob');
        $updateBtn = $('#updateBtn');
        $updateBtn.click(updateHandler);
        $logoutBtn = $('#logoutBtn');
        $logoutBtn.click(logoutHandler);

        userService.getCurrentUser().then(renderUser);
    }

    function renderUser(user) {
        $usernameFld.val(user.username);
        $firstNameFld.val(user.firstName);
        $lastNameFld.val(user.lastName);
        $phoneFld.val(user.phone);
        $emailFld.val(user.email);
        $roleFld.val(user.role);
        $dobFld.val(user.dateOfBirth);
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
            firstName: firstNameStr,
            lastName: lastNameStr,
            phone: phoneStr,
            email: emailStr,
            role: roleStr,
            dateOfBirth: dobStr
        }
        
        var userObjStr = JSON.stringify(userObj);
        
        userService.updateProfile(userObjStr).then(onProfileUpdated, onProfileUpdatedFail);
    }

    function onProfileUpdated(user) {
        alert('profile updated successfully');
        renderUser(user);
    }

    function onProfileUpdatedFail(user) {
        alert('profile update fail');
    }

    function logoutHandler() {
        userService.logout().then(function() {
            window.location.href = '/jquery/components/login/login.template.client.html';
        })
    }
})();

