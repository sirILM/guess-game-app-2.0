import { Slot } from "expo-router";
import { GuessProvider } from "../context/GuessContext";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";

import Colors from "../constants/colors";
import supabase from "../lib/supabase";
import Login from "./login";

export default function RootLayout() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  return (
    <GuessProvider>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={{
            uri: "https://ahjanudiomayubxpquam.supabase.co/storage/v1/object/public/images//background.png",
          }}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            <StatusBar />
            {/* <Slot /> */}
            {!session && !session?.user && <Login />}
            {session && session?.user && <Slot />}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </GuessProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
