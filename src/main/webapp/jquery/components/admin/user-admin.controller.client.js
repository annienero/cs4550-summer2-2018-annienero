(function () {
    var $usernameFld, $passwordFld;
    var $updateBtn, $createBtn;
    var $firstNameFld, $lastNameFld, $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new UserService();
    var curUserId = -1;
    $(main);

    function main() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $createBtn = $('.wbdv-create');
        $updateBtn = $('.wbdv-update');
        $updateBtn.hide();
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $roleFld = $('#roleFld');
        $userRowTemplate = $('.wbdv-template.wbdv-user')
           .clone()
           .removeClass('wbdv-hidden');
        $tbody = $('#tbody');

        $updateBtn.click(updateUser);
        $createBtn.click(createUser);
        $userRowTemplate.click(selectUser);

        findAllUsers()
     }

    function createUser() { 
        var userObj = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            first_name: $firstNameFld.val(),
            last_name: $lastNameFld.val(),
            role: $roleFld.val()
        }

        userService.createUser(JSON.stringify(userObj));

         // TODO then do vvvv
         clearCurUser();
         findAllUsers();
     }

    function findAllUsers() {
        userService.findAllUsers(renderUsers);
     }

     function renderUsers(users) {
        $tbody.empty();
        for(var u in users) {
            var user = users[u];
            var $row = $userRowTemplate.clone();
            $row.find('.wbdv-username')
                 .html(user.username);
            $row.find('.wbdv-password')
                 .html(user.password);
            $row.find('.wbdv-first-name')
                 .html(user.firstName);
            $row.find('.wbdv-last-name')
                 .html(user.lastName);
            $row.find('.wbdv-role')
                 .html(user.role);
            $tbody.append($row);

            var deleteBtn = $row.find('.wbdv-remove');
            deleteBtn.click(deleteUser);
            deleteBtn.attr('id', user.id);

            var editBtn = $row.find('.wbdv-edit');
            editBtn.click(selectUser);
            editBtn.attr('id', user.id);
            editBtn.attr('username', user.username);
            editBtn.attr('password', user.password);
            editBtn.attr('firstName', user.firstName);
            editBtn.attr('lastName', user.lastName);
            editBtn.attr('role', user.role);
        }
    } 
    
    function deleteUser(event) {
        var $button = $(event.currentTarget);
        var id = $button.attr('id');

        userService.deleteUser(id); //TODO callback? vvvvv

        findAllUsers();
    }

    function selectUser() { 
        var $button = $(event.currentTarget);
        curUserId = $button.attr('id');
        renderUser(findUserById())
            .then(function() {
                $createBtn.hide();
                $updateBtn.show();
            })
    }

    //TODO not working
    function findUserById() { 
        return userService.findUserById(curUserId);
     }

    function renderUser(user) { 
        $usernameFld.val(user.username);
        $passwordFld.val(user.password);
        $firstNameFld.val(user.firstName);
        $lastNameFld.val(user.lastName);
        $roleFld.val(user.role);
     }

    function updateUser() { 
        var userObj = {
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            first_name: $firstNameFld.val(),
            last_name: $lastNameFld.val(),
            role: $roleFld.val()
        }
        userService.updateUser(curUserId, JSON.stringify(userObj)).then(afterUserUpdated);  // TODO then not working       
     }

     function afterUserUpdated() {
        clearCurUser();
        findAllUsers();
     }

     function clearCurUser() {
        $createBtn.show();
        $updateBtn.hide();
        $usernameFld.val('');
        $passwordFld.val('');
        $firstNameFld.val('');
        $lastNameFld.val('');
     }
})();
