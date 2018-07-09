function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;

    this.url = 'http://localhost:8080/api/user';  // TODO: r u sure
    var self = this;

    function createUser(userObjStr, callback) { 
        // TODO: what is callback and why
        fetch('/api/user', {
            method: 'post',
            body: userObjStr, 
            // TODO point of below and do i even need
            headers: {
                'Content-Type': 'application/json'
            }
        })
     }
    function findAllUsers(callback) { 
        // TODO why callback why why why
        // TODO: do i need to do anything else to make this make sense/work or like
        // wait how does get even work pls help me
        fetch('/api/user', {
            method: 'get'
        })
        // TODO: do i return something that would prob make sense but how
     }

    function findUserById(userId, callback) { 
        // TODO: does path even make sense
        var path = '/api/user' + userId;
        fetch(path, {
            method: 'get'
        })

        // TODO: return a user (is that what fetch gives?)
     }

    function updateUser(userId, userObjStr, callback) {
    //TODO does that even make sense to build path or
        var path = '/api/user' + userId;
        fetch(path, {
            method: 'post',
            body: userObjStr
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
            }
        });
      }

    function login(userObjStr, callback) {
        fetch('/api/login', {
            method: 'get',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // TODO: shoul i retrn or smth, how to say if it worked or not?
    }

    function logout(callback) {
        //TODO what kinda fetch?????/
        fetch('/api/profile', {
            method: 'post'
        })
    }

    function updateProfile(userId, userObjStr, callback) {
        // TODO wait java doesnt seem to use id plz help
        // TODO: did i send id as path parameter tho did i do anything
        var path = '/api/user';
        fetch(path, {
            method: 'post',
            body: userObjStr
        })
     }
}
