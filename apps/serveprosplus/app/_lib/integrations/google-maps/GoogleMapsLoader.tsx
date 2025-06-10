import { LoadScript } from "@react-google-maps/api";
import SplashPage from "~/routes/_auth/SplashPage";

type GoolgeMapsLoaderProps = {
  children: React.ReactNode;
};

export default function GoogleMapsLoader({ children }: GoolgeMapsLoaderProps) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDXV7puMZ0n4iWMcVR-AmT63lu_k-PZMoU"
      libraries={["places"]}
      loadingElement={<SplashPage />}
    >
      {children}
    </LoadScript>
  );
}
