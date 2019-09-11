import { firebase } from './firebase';
import 'firebase/firestore';

//Initialize firestore cloud database
const db = firebase.app('cafeApp').firestore();
db.settings({ timestampsInSnapshots: true });
export { db };