import { AuthPageLayout, SignInAccountForm, SignInAccountProps } from "./auth";

export default function AccountSignIn({
  signInAccount,
  handleGoogleSignIn,
}: SignInAccountProps) {
  return (
    <>
      <AuthPageLayout
        accountActionText="Create an account"
        accountQuestionText="Dont'have and account?"
        btnText="Sign in"
        formHeader="Sign in to your account"
        formText="Welcome back! Please enter your account details"
        createAccount={() => {}}
        signInAccount={signInAccount}
        handleGoogleSignIn={handleGoogleSignIn}
        linkTo="/create-account"
      >
        <SignInAccountForm
          signInAccount={signInAccount}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      </AuthPageLayout>
    </>
  );
}
