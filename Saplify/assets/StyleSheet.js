import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#4B7156",
   },
   mainContainer: {
     paddingHorizontal: 16,
     backgroundColor: "#4B7156",
   },
   title: {
    marginBottom: 24,
    paddingVertical: 8,
    backgroundColor: "#E6E6EF",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    borderRadius: 22,
    textAlign: "center"
  },
  aboutBox: {
    backgroundColor: "#E6E6EF",
    alignItems: "center",
    borderRadius: 22,
  },
  aboutDesc: {
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
    width: "100%",
    borderRadius: 22,
  },
  staticBackButton: {
    borderRadius: 22,
    backgroundColor: "#FFEEE2",
    textAlign: "center",
    marginTop: 16,
    borderRadius: 22,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignSelf: "center",
  },
  invisibleBox: {
    flex: 1,
  },
  textButton: {
    paddingHorizontal: 15,
    textAlign: "center",
  },
  backButton: {
    backgroundColor: "#FFEEE2",
    borderRadius: 22,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    position: "absolute",
    alignSelf: "center",
    top: "95%",
    zIndex: 100,
  },
  plantBox: {
    backgroundColor: "#E6E6EF",
    alignItems: "center",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  plantDesc: {
    backgroundColor: "#C4C4C4",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
  plant_image: {
    resizeMode: "contain",
    height: 300,
    width: 300
  },
  locationBox: {
    backgroundColor: "#E6E6EF",
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    marginBottom: 100
  },
  locationDesc: {
    backgroundColor: "#C4C4C4",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10
  },
  image: {
    width: '50vw',
    height: '100%'
  },
  boxImage: {
    flex: 2,
  },
  boxText: {
    flex: 2,
  },
  searchInput: {
    backgroundColor: "#FFEEE2",
    borderRadius: 22,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    position: "absolute",
    alignSelf: "center",
    top: "2%",
    zIndex: 100,
  },
  newItemInput: {
    backgroundColor: "#FFEEE2",
    paddingHorizontal:10,
    borderRadius: 22,

  },
  newItemHeader: {
    marginHorizontal: 10,
    marginVertical: 5,

  },
  newItemBox: {
    backgroundColor: "#E6E6EF",
    borderRadius: 22,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
  newItemAddPicture: {
    height: 100,
    width: "40%",
    textAlign: "center",
    backgroundColor: "#C4C4C4",
    borderRadius: 22,
    paddingVertical: 40,
    marginTop: 16,
    marginHorizontal: "30%"
  },
  homeList: {
    height: "100%",
  },
  });
