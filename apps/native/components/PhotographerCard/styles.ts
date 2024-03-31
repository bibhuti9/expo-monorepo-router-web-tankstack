import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 4,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image: {
    alignSelf: "stretch",
  },
  heaerContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fea6a6",
    height: 40,
    width: 40,
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});
