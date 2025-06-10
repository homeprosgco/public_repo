import { MediaQuery } from "@mantine/core";
import { zodResolver } from "@mantine/form";
import { z } from "zod";
import AccountCreation from "../_auth/AccountCreation";
import { AuthFormProvider, useAuthForm } from "../_auth/auth-form-context";
import CreateAccount from "../_auth/CreateAccount";
import { useEmailSignUp, useGoogleSignIn } from "../_auth/hooks";

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string({
      required_error: "Password is required"
    })
    .min(8, { message: "Password should be a minumum of 8 letters" }),
  passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords don't match",
  path: ["passwordConfirm"]
});

export default function CreateAccountRoute() {
  const [handleEmailSignUp, signUpError] = useEmailSignUp();
  const [handleGoogleSignIn, googleSignInError] = useGoogleSignIn();
  const form = useAuthForm({
    validate: zodResolver(schema),
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  function createAccount() {
    form.validate();
    console.log(form.values);
    console.log(form.errors)
    console.log(form.isValid());
    if (form.isValid()) {
      handleEmailSignUp({ ...form.values });
    }
  }

  return (
    <>
      <AuthFormProvider form={form}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <div>
            <AccountCreation
              createAccount={createAccount}
              handleGoogleSignIn={handleGoogleSignIn}
            />
          </div>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <CreateAccount
              createAccount={createAccount}
              handleGoogleSignIn={handleGoogleSignIn}
            />
          </div>
        </MediaQuery>
      </AuthFormProvider>
    </>
  );
}
