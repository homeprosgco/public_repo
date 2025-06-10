export type AuthLayoutProps = {
  formHeader: string;
  formText: string;
  accountActionText: string;
  accountQuestionText: string;
  btnText: string;
  signInAccount: () => void;
  createAccount: () => void;
  handleGoogleSignIn: () => void;
  linkTo: string;
  children: React.ReactNode;
};