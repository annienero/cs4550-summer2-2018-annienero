function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.register = register;

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
        // do i return something that would prob make sense but how
     }

    function findUserById(userId, callback) { 
        // does path even make sense
        var path = '/api/user' + userId;
        fetch(path, {
            method: 'get'
        })

        // return a user
     }

    function updateUser(userId, user, callback) { 
        // did i send id as path parameter tho did i do anything
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

        // it tell me to receive status but how and what and HELP ME
     }

     function register() { 
        // do i not just use create user here and also i need so much fields but i have none?
      }
}
