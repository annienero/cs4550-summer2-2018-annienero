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

    this.url = 'http://localhost:8080/api/user';  // TODO: r u sure
    var self = this;

    function createUser(userObjStr, callback) { 
        // TODO: what is callback and why
        fetch('/api/user', {
            method: 'post',
            body: userObjStr, 
            headers: {
                'Content-Type': 'application/json'
            }
        })
     }
    function findAllUsers(callback) { 
        // TODO why callback why why why
        var users;
        fetch('/api/user', {
            method: 'get'
        }).then(function(response) {
            users = response.json();
        })
        return users;
     }

    function findUserById(userId, callback) { 
        var path = '/api/user' + userId;
        fetch(path, {
            method: 'get'
        })

        // TODO: return a user (is that what fetch gives?)
     }

    function updateUser(userId, userObjStr, callback) {
        var path = '/api/user' + userId;
        fetch(path, {
            method: 'post',
            body: userObjStr, 
            headers: {
                'Content-Type': 'application/json'
            }
        })
     }

    function deleteUser(userId, callback) { 
        var path = '/api/user' + userId;
        fetch(path, {
            method: 'delete'
        })

        // TODO: it tell me to receive status but how and what and HELP ME
     }

    function register(userObjStr, callback) { 
        fetch('/api/register', {
            method: 'post',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            },
            'credentials': 'include'
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
        // TODO: shoul i retrn or smth, how to say if it worked or not?
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
            method: 'get'
        }).then(function(response) {
            user = response.json();
        })
        //TODO seems like this is just getting back a null
        console.log(user);
        return user;
    }
}
