import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 16,
    letterSpacing: 0.7,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    borderRadius: 30,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
