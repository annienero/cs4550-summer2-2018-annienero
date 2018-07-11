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

    this.url = '/api/user';
    var self = this;

    function createUser(userObjStr) { 
        return fetch(self.url, {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
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
            self.url + '/' + userId)
            .then(function(response) {
                return response.json();
            });
    }

     function updateUser(userId, userObjStr) {
        return fetch(self.url + '/' + userId, {
            method: 'put',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
        });
     }

    function deleteUser(userId) {
        return fetch(
            self.url + '/' + userId,
            { method: 'delete' }
        );
    }
     
    //TODO how to check for when its alr taken and then what to do
    function register(username, userObjStr) { 
        return fetch(self.url + '/' + username, {
            method: 'get'
        }).then(function(response) {
            var user = response.json();
            if (user.username == username) {
                alert("rip");
            } else {
                return fetch(self.url, {
                    method: 'post',
                    body: userObjStr,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    'credentials': 'include'
                })
            }
        })
      }

      //TODO no work
    function login(userObjStr, callback) {
        return fetch('/api/login', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
        }).then(function(response) {
            return response.json();
        });
    }

    function logout(callback) {
        return fetch('/api/logout', {
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
        return fetch('/api/profile', {
            method: 'get',
            'credentials': 'include'
        }).then(function(response) {
            return response.json();
        });
    }
}
