import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello shivam</Text>
      <StatusBar style="auto" />
      <ActivityIndicator size="large" color="#3d3ab0" />
      <Button
        onPress={() => alert("Button Pressed")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf",
    alignItems: "center",
    justifyContent: "center",
  },
});
