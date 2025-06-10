import AccountCreation from "./AccountCreation";
import AuthPageLayout from "./AuthPageLayout";
import { CreateAccountProps } from "./props/create-account-props";
import CreateAccountForm from "./CreateAccountForm";
import MobileAuthPageLayout from "./MobileAuthPageLayout";
import { AuthLayoutProps } from "./props/auth-layout-props";
import { SignInAccountProps } from "./props/signin-account-props";
import SignInAccountForm from "./SignInAccountForm";
import AccountSignIn from "./DesktopAccountSignIn";
import CreateAccount from "./CreateAccount";

export {
  CreateAccountForm,
  AccountCreation,
  AuthPageLayout,
  MobileAuthPageLayout,
  SignInAccountForm,
  AccountSignIn,
  CreateAccount
};
export type { CreateAccountProps, AuthLayoutProps, SignInAccountProps };
