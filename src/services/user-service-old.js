import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
var gWatchedUser = null;

export const userServiceOld = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
    remove,
    update,
    changeScore
}

// Debug technique
window.userService = userService


function getUsers() {
    return storageService.query('user')
   //  return httpService.get(`user`)
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
   //  const user = await httpService.get(`user/${userId}`)
    gWatchedUser = user;
    return user;
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)

   //  const user = await httpService.post('auth/login', userCred)
    // socketService.emit('set-user-socket', user._id);
   //  if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    // userCred.score = 10000;
    const user = await storageService.post('user', userCred)
   //  const user = await httpService.post('auth/signup', userCred)
    // socketService.emit('set-user-socket', user._id);
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // socketService.emit('unset-user-socket');
    return await httpService.post('auth/logout')
}


function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
   //  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
return 	{
   fullname: "Shaila & Alex",
   imgUrl: "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small",
   username: 6334250,
   password: "Shaila",
   id: 6334250,
   _id: "622f3402e36c59e6164fac46"
}
}


// (async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })();



// This IIFE functions for Dev purposes 
// It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
//     var user = getLoggedinUser()
//     // Dev Helper: Listens to when localStorage changes in OTHER browser

//     // Here we are listening to changes for the watched user (comming from other browsers)
//     window.addEventListener('storage', async () => {
//         if (!gWatchedUser) return;
//         const freshUsers = await storageService.query('user')
//         const watchedUser = freshUsers.find(u => u._id === gWatchedUser._id)
//         if (!watchedUser) return;
//         if (gWatchedUser.score !== watchedUser.score) {
//             console.log('Watched user score changed - localStorage updated from another browser')
//             socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser)
//         }
//         gWatchedUser = watchedUser
//     })
// })();

// This is relevant when backend is connected
// (async () => {
//     var user = getLoggedinUser()
//     if (user) socketService.emit('set-user-socket', user._id)
// })();

