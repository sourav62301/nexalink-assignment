import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import SvgQRCode from "react-native-qrcode-svg";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.shareButton}>
          <AntDesign
            style={{ paddingHorizontal: 10 }}
            name="down"
            size={18}
            color="white"
          />
          <Text style={styles.shareButtonText}>Share my card</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.qrCodeContainer}>
        <SvgQRCode
          value="https://nexalink.co"
          logo={require("./nexalink-logo.png")}
          logoSize={50}
          logoBackgroundColor="transparent"
          size={200}
        />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome
            style={{ paddingHorizontal: 10 }}
            name="share-square-o"
            size={18}
            color="grey"
          />
          <Text style={styles.optionText}>Share my card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <MaterialIcons
            style={{ paddingHorizontal: 10 }}
            name="add-card"
            size={18}
            color="grey"
          />
          <Text style={styles.optionText}>Add card to wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <SimpleLineIcons
            style={{ paddingHorizontal: 10 }}
            name="screen-smartphone"
            size={18}
            color="grey"
          />
          <Text style={styles.optionText}>Add card to homescreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <MaterialCommunityIcons
            style={{ paddingHorizontal: 10 }}
            name="email-multiple-outline"
            size={18}
            color="grey"
          />
          <Text style={styles.optionText}>Create Email signature</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <MaterialIcons
            style={{ paddingHorizontal: 10 }}
            name="photo-size-select-large"
            size={18}
            color="grey"
          />
          <Text style={styles.optionText}>Create virtual background</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.shareAirdropButton}>
          <MaterialIcons
            style={{ paddingHorizontal: 10 }}
            name="wifi-tethering"
            size={24}
            color="white"
          />
          <Text style={styles.shareAirdropButtonText}>Share with AirDrop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 30,
    marginVertical: 20,
  },
  header: {
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
  },
  shareButton: {
    backgroundColor: "#FF6D00",
    padding: 15,
    borderRadius: 100,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  shareButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  qrCodeContainer: {
    alignItems: "center",
  },
  optionsContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footer: {
    alignItems: "center",
  },
  shareAirdropButton: {
    flexDirection: "row",
    backgroundColor: "#FF6D00",
    padding: 15,
    borderRadius: 10,
  },
  shareAirdropButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
