(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $removeBtn = $('#removeBtn');
        $editBtn = $('#editBtn');
        $createBtn = $('#createBtn');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $userRowTemplate = $('#userRowTemplate');
        $tbody = $('#tbody');

        $removeBtn.click(deleteUser);
        $editBtn.click(updateUser);
        $createBtn.click(createUser);
        $userRowTemplate.click(selectUser);
     }

    function createUser() { 
        var user = User($usernameFld, $passwordFld, $firstNameFld, $lastNameFld);
        userService.createUser(user);

         //update the form on server response
         findAllUsers();
     }

    function findAllUsers() {
        renderUsers(userService.findAllUsers());
     }

    function findUserById() { 
        // Reads the user is from the icon id attribute. 
        // Uses user service findUserById() to retrieve user and then 
        
        
        //update the form on server response
        findAllUsers();
     }

    function deleteUser() { 
        var user = findUserById("how to get id????"); // TODO
        userService.deleteUser(user);
        // or do i pass the id or something plz help


         //update the form on server response
         findAllUsers();
     }

    function selectUser() { 
        // haha this one doesnt even have a description hahah how tf would i even see what row got selected haha
     }

    function updateUser() { 
        // Reads the user is from the icon id attribute
        // what is icon id attribute
        var user = User($usernameFld, $passwordFld, $firstNameFld, $lastNameFld);
        userService.updateUser(user);
        // that cant be right



         //update the form on server response
         findAllUsers();
     }

    function renderUser(user) { 
        // accepts a user object as parameter and updates the form with the user properties
        // HUHHHH ... how to update the form????? if you select isn't it alr there?
     }


    function renderUsers(users) { 
        users.forEach(element => {
            element.renderUser();
        });
     }
})();
