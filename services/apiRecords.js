import supabase from "../lib/supabase";

export async function getRecords() {
  let { data: records, error } = await supabase.from("records").select("*");

  if (error) {
    throw new Error("Records could not be loaded");
  }

  return records;
}

export async function addRecord(guessRounds, userNumber) {
  const { error } = await supabase
    .from("records")
    .insert([{ guess_rounds: guessRounds, user_number: userNumber }])
    .select();

  if (error) {
    throw new Error("Record could not be added");
  }
}

export async function deleteRecord(id) {
  const { error } = await supabase.from("records").delete().eq("id", id);

  if (error) {
    throw new Error("Record could not be deleted");
  }
}
