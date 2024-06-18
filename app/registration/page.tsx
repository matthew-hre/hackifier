import { createClient } from "@/lib/supabase/server";
import RegistrationClient from "./RegistrationClient";

const getRegistrationQuestions = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("questions")
    .select(
      "question_id, question_text, question_type, question_description, options"
    )
    .order("question_order");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

const getUserDataAndApplication = async () => {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    console.error(userError);
    return {};
  }

  const user = userData?.user;

  if (!user) {
    return {};
  }

  const { data: applicationData, error: applicationError } = await supabase
    .from("applications")
    .select()
    .eq("user_id", user.id)
    .single();

  if (applicationError) {
    console.error(applicationError);
    return {};
  }

  return {
    user,
    application: applicationData,
  };
};

const submitResults = async (data: any) => {
  "use server";

  const supabase = createClient();

  const { user, application } = await getUserDataAndApplication();

  if (!user || !application) {
    return;
  }

  const formattedData = Object.entries(data).map(([question_id, answer]) => {
    return {
      application_id: application.application_id,
      question_id: parseInt(question_id),
      response: answer,
    };
  });

  const { error } = await supabase.from("responses").upsert(formattedData);
};

const getExistingResponses = async () => {
  const supabase = createClient();

  const { user, application } = await getUserDataAndApplication();

  if (!user || !application) {
    return [];
  }

  const { data, error } = await supabase
    .from("responses")
    .select("question_id, response")
    .eq("application_id", application.application_id);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

export default async function Registration() {
  const questions = await getRegistrationQuestions();

  const existingResponses = await getExistingResponses();

  console.log(existingResponses);

  return (
    <RegistrationClient
      questions={questions}
      existingResponses={existingResponses}
      submitResults={submitResults}
    />
  );
}
