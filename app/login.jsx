import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { signIn, signUp } from "../services/apiAuth";

import Colors from "../constants/colors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope", color: "#fff" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={"none"}
          style={styles.input}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock", color: "#fff" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={"none"}
          style={styles.input}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          onPress={() => {
            signIn(email, password);
          }}
          color="#85939E"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          onPress={() => signUp(email, password)}
          color="#85939E"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  input: {
    color: Colors.accent600,
  },
  button: {
    backgroundColor: Colors.accent500,
  },
});
