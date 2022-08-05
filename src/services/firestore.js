
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where, Timestamp, addDoc } from "firebase/firestore";



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

/* export function testDB(){
  console.log(db);
} */


// obtenemos la lista completa de productos de firebase
export async function getProducts(){
  const productsCollectionRef = collection(db, "products");
  const docSnapshot = await getDocs(productsCollectionRef);

  const dataProducts = docSnapshot.docs.map((item) => {
    const product = {
      ...item.data(),
      id: item.id
    }
    return product
  })

  return (dataProducts);

}


// obtenemos productos individualmente
export async function getProduct(itemId){
  const productsCollectionRef = collection(db, "products");
  const docRef = doc(productsCollectionRef, itemId);

  const docSnapshot = await getDoc(docRef);


  return {...docSnapshot.data(), id: docSnapshot.id};
}


// obtenemos productos por categoria
export async function getProductsByCategory(catId){
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, catId, where("category", "==", catId));

  const querySnapshot = await getDocs (q);
  
  querySnapshot.forEach((item) =>{
    const productCategory = {
      ...item.data(),
      id: item.id,
      category: item.category
    }
    return productCategory;
    
})};


//creamos el buy order del cliente con fecha y hora y lo almacenamos dentro de firebase
export async function createBuyOrder(dataOrder){
  const ordersCollectionRef = collection(db, "orders");
  const dataTimeStamp = Timestamp.now();

  const dataOrderWithDate = {
    ...dataOrder,
    date: dataTimeStamp,
  };

  const orderCreated = await addDoc(ordersCollectionRef, dataOrderWithDate);

  return orderCreated
}

export default db;


