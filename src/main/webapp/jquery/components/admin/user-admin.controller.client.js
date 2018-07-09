(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        $usernameFld = $('#usernameFld'); //TODO do these update dynamically or do i have to call this again?
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

        findAllUsers()
     }

    function createUser() { 
        var userObj = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(), //TODO camel case or?
            lastName: $lastNameFld.val()
        }

        userService.createUser(JSON.stringify(userObj), null); //TODO i need CALLBACK

         // TODO update the form on server response.. did i do it ?
         // how do i know when response?
         findAllUsers();
     }

    function findAllUsers() {
        renderUsers(userService.findAllUsers(null)); //TODO needs a callback
     }

    function findUserById() { 
        //  TODO Reads the user id from the icon id attribute. 
        userService.findUserById(id, null); //TODO what is id and what is callback
        
        // TODO update the form on server response (vv probably?)
        findAllUsers();
     }

    function deleteUser() {
        // TODO how get id
        userService.deleteUser(id, null); //TODO need callback

         // TODO update the form on server response vvv ???
         findAllUsers();
     }

    function selectUser() { 
        //  TODO haha this one doesnt even have a description hahah how tf would i even see what row got selected haha
     }

    function updateUser() { 
        //  TODO Reads the user is from the icon id attribute
        //  TODO what is icon id attribute
        var userObj = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(), //TODO camel case or?
            lastName: $lastNameFld.val()
        }

        userService.updateUser(id, JSON.stringify(userObj), null); //TODO i need CALLBACK and id

         // TODO update the form on server response vvv???
         findAllUsers();
     }

    function renderUser(user) { 
        //  TODO accepts a user object as parameter and updates the form with the user properties
        //  TODO HUHHHH ... how to update the form????? if you select isn't it alr there?
     }


    function renderUsers(users) { 
        //TODO this is a bad guess
        users.forEach(element => {
            element.renderUser();
        });
     }
})();
