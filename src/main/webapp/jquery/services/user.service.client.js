function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;
    this.login = login;

    this.url = 'http://localhost:8080/api/user';  // TODO: r u sure
    var self = this;

    function createUser(user, callback) { 
        // TODO: what is callback and why
        fetch('/api/user', {
            method: 'post',
            body: JSON.stringify(userObj), 
            // TODO point of below and do i even need
            headers: {
                'Content-Type': 'application/json'
            }
        })
     }
    function findAllUsers(callback) { 
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

        // TODO: return a user
     }

    function updateUser(userId, user, callback) { 
        // TODO: did i send id as path parameter tho did i do anything
        var path = '/api/user' + userId;
        fetch(path, {
            method: 'post',
            body: JSON.stringify(user)
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
        fetch('/api/register', {
            method: 'get',
            body: userObjStr,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // TODO: shoul i retrn or smth
       }
}
