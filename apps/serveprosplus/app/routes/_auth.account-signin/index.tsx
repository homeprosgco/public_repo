import { MediaQuery } from "@mantine/core";
import DesktopAccountSignIn from "../_auth/DesktopAccountSignIn";
import { AuthFormProvider, useAuthForm } from "../_auth/auth-form-context";
import AccountSignIn from "../_auth/AccountSignIn";
import { useEmailSignIn, useGoogleSignIn } from "../_auth/hooks";


export default function AccountSignInPage() {
  const [handleEmailSignIn, signUpError] = useEmailSignIn();
  const [handleGoogleSignIn, googleSignInError] = useGoogleSignIn();
  const form = useAuthForm({
    initialValues: {
      email: "hollobethyname@gmail.com",
      password: "12345678",
    },
  });

  function signInAccount() {
    console.log(form.values);
    handleEmailSignIn({ ...form.values });
  }

  return (
    <>
      <AuthFormProvider form={form}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <div>
            <AccountSignIn
              signInAccount={signInAccount}
              handleGoogleSignIn={handleGoogleSignIn}
            />
          </div>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <DesktopAccountSignIn
              signInAccount={signInAccount}
              handleGoogleSignIn={handleGoogleSignIn}
            />
          </div>
        </MediaQuery>
      </AuthFormProvider>
    </>
  );
}
