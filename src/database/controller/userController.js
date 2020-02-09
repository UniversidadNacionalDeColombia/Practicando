import fire from '../firebase/Fire'

export default class UserController {
    getCurrentUser(){
        return fire.auth().currentUser;
    }
}