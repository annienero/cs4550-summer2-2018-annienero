function UserService() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;
    this.logout = logout;
    this.updateProfile = updateProfile;
    this.getCurrentUser = getCurrentUser;

    this.url = 'http://localhost:8080/api/user';
    var self = this;

    function createUser(userObjStr) { 
        fetch(self.url, {
            method: 'post',
            body: userObjStr, 
        })
     }

     function findAllUsers(callback) {
        return $.ajax({
            url: self.url,
            success: callback
        })
     }
     

    function findUserById(userId) {
        return fetch(
            self.url + '/' + userId);
    }

     function updateUser(userId, userObjStr) {
        return fetch(self.url + '/' + userId, {
            method: 'put',
            body: userObjStr
        });
     }

    // TODO: it tell me to receive status but how and what and HELP ME
    function deleteUser(userId, callback) {
        return fetch(
            self.url + '/' + userId,
            { method: 'delete' }
        );
    }
     
    function register(userObjStr, callback) { 
        fetch('/api/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        }).then(function(response) {
            // TODO could come back as null
            console.log(response);
            return response;
        });
      }

    function login(userObjStr, callback) {
        var promise = fetch('/api/login', {
            method: 'get',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        });
        return promise;

        //TODO is that how to return status or?
    }

    function logout(callback) {
        fetch('/api/logout', {
            method: 'post',
            'credentials': 'include'
            //TODO do i only need credentials when actual user (not just their info) changes or always?
        })
    }

    function updateProfile(userObjStr, callback) {
        fetch('/api/profile', {
            method: 'put',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        })
     }

     //TODO callback bc idk?
     function getCurrentUser(callback) {
         //TODO is this kinda the right idea w returning stuff?
        var user;
        fetch('/api/profile', {
            method: 'get',
            'credentials': 'include'
        }).then(function(response) {
            user = response.json();
        })
        //TODO seems like this is just getting back a null
        console.log(user);
        return user;
    }
}
