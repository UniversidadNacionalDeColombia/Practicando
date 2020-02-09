import fire from '../firebase/Fire'

export default class AuthControlller {
    async authWithEmailPassword(email, password) {
        try {
            await fire.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log("error", error)
            return error;
        }
    }

    async singUpWithEmailPassword(email, password) {
        return await fire.auth().createUserWithEmailAndPassword(email, password);
    }
}