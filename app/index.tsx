import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    //ทำงานทุกครั้งที่หน้าจอถูกโหลด
    const timer = setTimeout(() => {
      router.replace("/bmr");
    }, 3000); //หน่วยเป็น millisecond

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/13767450/pexels-photo-13767450.jpeg",
        }}
        style={styles.imglogo}
      />
      <Text style={styles.txtAppName}>BMR Calculator</Text>
      <ActivityIndicator size="large" color="#eb729a" />
    </View>
  );
}

const styles = StyleSheet.create({
  imglogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#ed175e",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3acc4",
  },
  txtAppName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ed175e",
    marginBottom: 20,
  },
});
