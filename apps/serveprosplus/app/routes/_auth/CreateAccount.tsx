// import SupabaseAuthError from "./SupabaseAuthError";

import { AuthPageLayout, CreateAccountForm, CreateAccountProps } from "./auth";

export default function CreateAccount({
  createAccount,
  handleGoogleSignIn,
}: CreateAccountProps) {
  return (
    <>
      {/* <SupabaseAuthError error={signUpError} /> */}
      <AuthPageLayout
        accountActionText="Sign in"
        accountQuestionText="Already have an account?"
        btnText="Create Account"
        formHeader="Create New Account"
        formText="Welcome! Please enter your new account details"
        createAccount={createAccount}
        signInAccount={() => {}}
        handleGoogleSignIn={() => handleGoogleSignIn}
        linkTo="/signin"
      >
        <CreateAccountForm
          createAccount={createAccount}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      </AuthPageLayout>
    </>
  );
}
