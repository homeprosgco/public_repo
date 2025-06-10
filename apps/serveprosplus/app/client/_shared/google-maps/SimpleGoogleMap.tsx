import { Stack, TextInput } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { GoogleMap, Autocomplete, MarkerF } from "@react-google-maps/api";
import { memo, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
  minWidth: "256px",
  minHeight: "300px",
};

type SimpleGoogleMapProps = {
  onPlaceChange?: (place: string) => void;
  subscribeToAddress?: boolean;
  showInput?: boolean;
  value?: string
};

function SimpleGoogleMap({
  onPlaceChange = (place: string) => {},
  subscribeToAddress = false,
  showInput = true,
  value = ''
}: SimpleGoogleMapProps) {
  const [autocomplete, setAutoComplete] =
    useState<google.maps.places.Autocomplete>();
  const [coordState, setCoordState] = useSetState<{ lng: number; lat: number }>(
    {
      lat: 26.7361571,
      lng: -80.0669377,
    }
  );

  function onPlaceChanged() {
    if (autocomplete) {
      console.log(autocomplete.getPlace().geometry?.location?.lat());
      console.log(autocomplete.getPlace().geometry?.location?.lng());
      const place = autocomplete.getPlace();
      setCoordState({
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      });

      if (subscribeToAddress) {
        let address1 = "";
        let postcode = "";
        let locality = "";
        let administrativeAreaLevel1 = "";

        for (const component of place.address_components as google.maps.GeocoderAddressComponent[]) {
          const componentType = component.types[0];

          switch (componentType) {
            case "street_number": {
              address1 = `${component.long_name} ${address1}`;
              break;
            }

            case "route": {
              address1 += component.short_name;
              break;
            }

            case "postal_code": {
              postcode = `${component.long_name}${postcode}`;
              break;
            }

            case "locality":
              locality = component.long_name;
              break;

            case "administrative_area_level_1": {
              administrativeAreaLevel1 = component.short_name;
              break;
            }
          }
        }
        onPlaceChange(
          `${address1}, ${locality}, ${administrativeAreaLevel1}, ${postcode} `
        );
      }
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }

  return (
    <Stack align="center" spacing={24}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordState}
        zoom={10}
        options={{ disableDefaultUI: true }}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {coordState.lat !== 26.7361571 && coordState.lng !== -80.0669377 ? (
            <MarkerF position={coordState} />
          ) : null}
        </>
      </GoogleMap>
      {showInput ? (
        <Autocomplete
          restrictions={{ country: "us" }}
          fields={["address_components", "geometry"]}
          types={["address"]}
          onPlaceChanged={onPlaceChanged}
          onLoad={(autocomplete) => setAutoComplete(autocomplete)}
        >
          <TextInput
            placeholder="Enter your address"
            label="Address"
            styles={{
              wrapper: {
                minWidth: 320,
              },
            }}
            defaultValue={value}
          />
        </Autocomplete>
      ) : null}
    </Stack>
  );
}

export default memo(SimpleGoogleMap);
export { Autocomplete };
