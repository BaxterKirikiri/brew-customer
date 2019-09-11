import { firebase } from './firebase';
import 'firebase/auth';

//Initialize firebase auth
const auth = firebase.auth();

const signIn = () => {
    //Initiate redirect to google sign in page
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
}

const signOut = () => {
    auth.signOut();
}

export { auth, signIn, signOut };