import { collection, addDoc, getDocs } from "firebase/firestore";
import { dbConfig } from "../firebase_config.js";

export class Plant {
  constructor(key, name, price, phone, email, location, description, imageUrl) {
    this.key = key;
    this.name = name;
    this.price = price;
    this.phone = phone;
    this.email = email;
    this.location = location;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  async postData(){
    try{
      const db = dbConfig();
      console.log(db);
      const docRef = await addDoc(collection(db, "Plants"), {
        description: this.description,
        email: this.email,
        imageUrl: this.imageUrl,
        key: this.key,
        location: this.location,
        name: this.name,
        price: this.price,
        phone: this.phone
      });
      console.log("Document written with ID: ", docRef.id);
    } catch(e){
      console.error("Error adding document: ", e);
    }

    this.getData();
  }


}

async function getData() {
  var list = [];
  console.log("Running getData()")
  const db = dbConfig();
  var index = 1;
  const querySnapshot= await getDocs(collection(db, "Plants"));
    querySnapshot.forEach((doc) => {
      list.push(new Plant(
        index++, doc.data().name, doc.data().price, doc.data().phone,
        doc.data().email, doc.data().location, doc.data().description, doc.data().imageUrl));
    });
    return formatData(list);
}

function formatData(plantList){
  plantData = [];
  plantList.forEach(plant=>{
    plantData.push(
      { key: plant.key,
        name: plant.name,
        imageUrl: require('../assets/images/sap4.jpg'),
        price: plant.price,
        description: plant.description,
        phone: plant.phone,
        email: plant.email,
        location: plant.location
      });
  });
  console.log(plantData);
  return plantData;
}

module.exports.getData = getData;
