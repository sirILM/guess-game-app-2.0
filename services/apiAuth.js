import { Alert } from "react-native";

import supabase from "../lib/supabase";

export async function signIn(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) Alert.alert(error.message);
}

export async function signUp(email, password) {
  const {
    data: { session },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) Alert.alert(error.message);
  if (!session) Alert.alert("Please check your inbox for email verification!");
}

export async function signOut() {
  let { error } = await supabase.auth.signOut();

  if (error) Alert.alert(error.message);
}
