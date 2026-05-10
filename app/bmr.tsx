import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Bmr() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState(0);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    let result = 0;

    if (gender === "male") {
      result = 66 + 13.7 * w + 5 * h - 6.8 * a;
    } else {
      result = 665 + 9.6 * w + 1.8 * h - 4.7 * a;
    }

    setBmr(Math.round(result));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBmr}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/13767450/pexels-photo-13767450.jpeg",
          }}
          style={styles.imglogo}
        />
        <Text style={styles.headerTitle}>BMR Calculator</Text>
        <Text style={styles.headerSubTitle}>
          อัตราการเผาผลาญพลังงานพื้นฐานที่ร่างกายต้องการ
        </Text>
      </View>

      <View style={styles.genderBox}>
        <Text style={styles.genderTitle}>เพศ (Gender)</Text>

        <View style={styles.genderSelect}>
          <TouchableOpacity
            style={[
              styles.btGender,
              gender === "male" && styles.btGenderActive,
            ]}
            onPress={() => setGender("male")}
          >
            <Image
              source={require("@/assets/images/male.png")}
              style={styles.imgGender}
            />
            <Text>ชาย</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btGender,
              gender === "female" && styles.btGenderActive,
            ]}
            onPress={() => setGender("female")}
          >
            <Image
              source={require("@/assets/images/female.png")}
              style={styles.imgGender}
            />
            <Text>หญิง</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.whBox}>
        <View style={styles.whTitle}>
          <Text style={styles.txtWh}>น้ำหนัก (kg)</Text>
          <Text style={styles.txtWh}>ส่วนสูง (cm)</Text>
        </View>

        <View style={styles.whInput}>
          <TextInput
            style={styles.tinputWh}
            keyboardType="numeric"
            placeholder="เช่น 89.45 ..."
            value={weight}
            onChangeText={setWeight}
          />

          <TextInput
            style={styles.tinputWh}
            keyboardType="numeric"
            placeholder="เช่น 168.12 ..."
            value={height}
            onChangeText={setHeight}
          />
        </View>
      </View>

      <View style={styles.ageBox}>
        <Text style={styles.ageTitle}>อายุ (ปี)</Text>
        <TextInput
          style={styles.tinputAge}
          keyboardType="numeric"
          placeholder="เช่น 35 ..."
          value={age}
          onChangeText={setAge}
        />
      </View>

      <TouchableOpacity style={styles.btBmr} onPress={handleCalculate}>
        <Text style={styles.txtBtBmr}>คำนวณ</Text>
      </TouchableOpacity>

      <View style={styles.resultBox}>
        <Text style={styles.resultTitle1}>BMR ของคุณคือ</Text>
        <Text style={styles.resultTitle2}>{bmr}</Text>
        <Text style={styles.resultTitle3}>แคลอรี่ / วัน</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e1e1",
  },
  headerBmr: {
    height: 200,
  },
  imglogo: {
    width: "100%",
    height: "100%",
  },
  headerTitle: {
    fontFamily: "Kanit_700Bold",
    position: "absolute",
    bottom: 40,
    left: 20,
    fontSize: 28,
    color: "#e3e1e1",
  },
  headerSubTitle: {
    fontFamily: "Kanit_400Regular",
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "#e3e1e1",
  },
  genderBox: {
    marginVertical: 20,
    marginHorizontal: 25,
  },
  genderTitle: {
    fontFamily: "Kanit_700Bold",
  },
  genderSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btGender: {
    width: "48%",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d4d4d4",
    elevation: 3,
    padding: 15,
    borderRadius: 10,
  },
  btGenderActive: {
    borderColor: "#ed175e",
    borderWidth: 2,
  },
  imgGender: {
    width: 25,
    height: 25,
  },
  whBox: {
    marginVertical: 5,
    marginHorizontal: 25,
  },
  whTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtWh: {
    width: "48%",
    fontFamily: "Kanit_700Bold",
  },
  whInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinputWh: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#d4d4d4",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  ageBox: {
    marginVertical: 15,
    marginHorizontal: 25,
  },
  ageTitle: {
    fontFamily: "Kanit_700Bold",
  },
  tinputAge: {
    borderWidth: 1,
    borderColor: "#d4d4d4",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  btBmr: {
    backgroundColor: "#ed175e",
    marginHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  txtBtBmr: {
    color: "#ffffff",
    fontFamily: "Kanit_700Bold",
  },
  resultBox: {
    marginVertical: 15,
    marginHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 25,
    elevation: 3,
  },
  resultTitle1: {
    fontFamily: "Kanit_700Bold",
  },
  resultTitle2: {
    fontFamily: "Kanit_700Bold",
    fontSize: 40,
    color: "#ed175e",
  },
  resultTitle3: {
    fontFamily: "Kanit_400Regular",
    color: "#6c6c6c",
  },
});
