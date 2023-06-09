import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(`Ih mané, deu ruim ${err}`));
  }, []);

  console.log(data);

  const nomes = ["João", "José", "maria", "joaquim", "antunes", "maristela"];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Json Placeholder</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.cardContainer}>
          <Text style={styles.textId}>{item.id}</Text>
          <Text style={styles.textData}>{item.title}</Text>
          <Text style={styles.textBody}>{item.body}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 30,
    alignContent: "center",
  },
  text: {
    fontSize: 40,
    padding: 5,
    fontWeight: 600,
    textAlign: "center",
    color: "black",
    display: "flex",
    margin: "auto",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  textData: {
    fontSize: 20,
    fontWeight: "bold",
    margin: "auto",
  },
  textId: {
    fontSize: 15,
    fontWeight: 500,
  },
  textBody: {
    fontSize: 17,
    fontWeight: 400,
    marginTop: 13,
  },
  cardContainer: {
    width: 300,
    height: "auto",
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    marginTop: 40,
    display: "flex",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
  },
});
