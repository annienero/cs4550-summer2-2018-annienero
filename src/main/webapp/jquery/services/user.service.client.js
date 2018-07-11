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
    function register(userObjStr) { 
        return fetch(self.url, {
            method: 'post',
            body: userObjStr,
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        });
    }

    function login(userObjStr, callback) {
        return fetch('/api/login', {
            method: 'post',
            body: userObjStr,
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    function logout() {
        return fetch('/api/logout', {
            method: 'post',
            'credentials': 'include'
        })
    }

    function updateProfile(userObjStr) {
        return fetch('/api/profile', {
            method: 'put',
            body: userObjStr,
            'credentials': 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            return response.json();
        });
     }

    function getCurrentUser(callback) {
        return fetch('/api/profile', {
            method: 'get',
            'credentials': 'include'
        }).then(function(response) {
            return response.json();
        });
    }
}
