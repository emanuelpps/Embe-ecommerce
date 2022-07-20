// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkjTd3Mx3nuY2-VjwTbpfqmXQFls0o1Qc",
  authDomain: "embe-ecommerce-coder.firebaseapp.com",
  projectId: "embe-ecommerce-coder",
  storageBucket: "embe-ecommerce-coder.appspot.com",
  messagingSenderId: "543639429154",
  appId: "1:543639429154:web:e532bd0e07eb9ccb50aa7b"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  db = getFirestore(app);

export function testDB(){
  console.log(db);
}

export async function getProducts(){
  const productsCollectionRef = collection(db, "products");
  const docSnapshot = await getDocs(productsCollectionRef);

  const dataProducts = docSnapshot.docs.map( item => {
    const product = {
      ...item.data(),
      id: item.id
    }
    return product
  })

  return (dataProducts);

}



export async function getProduct(id){
  const productsCollectionRef = collection(db, "products");
  const docRef = doc(productsCollectionRef, id);

  const docSnapshot = await getDoc(docRef);

  return docSnapshot.data();
}


