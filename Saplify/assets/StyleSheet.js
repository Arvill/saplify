import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
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
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    textAlign: "center"
  },
  about_box: {
    backgroundColor: "#E6E6EF",
    alignItems: "center",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  about_desc: {
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
    width: "100%",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  back_button: {
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: "#C4C4C4",
    paddingVertical: 8,
    textAlign: "center",
    marginTop: 16,
  },
  invisible_box: {
    flex: 1,
  },
  text_button: {
    paddingHorizontal: 15,
    textAlign: "center",
  },
  plant_box: {
    backgroundColor: "#E6E6EF",
    alignItems: "center",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  plant_desc: {
    backgroundColor: "#C4C4C4",
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    paddingHorizontal: 10,
    paddingBottom: 30,
    paddingTop: 10,
  },
  plant_image: {
    resizeMode: "contain",
    height: 300
  },
  });
