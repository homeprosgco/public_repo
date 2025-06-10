import { useForm } from "@mantine/form";
import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import { useOnlineQuoteForm } from "../OnlineFormContext";
import { OnlineQuoteActionData } from "../OnlineQuoteActionData";

const useBookingOnlineQuoteForm = () => {
  const onlineQuoteForm = useFetcher<OnlineQuoteActionData>();
  const form = useOnlineQuoteForm({
    initialValues: {
      lowPriceRange: "",
      highPriceRange: "",
      comment: "",
    }
  });

  function submitQuote() {
    onlineQuoteForm.submit({ ...form.values }, { method: "post" });
  }

  useEffect(() => {
    if (onlineQuoteForm.type === "actionReload") {
      const { fields, errors } = onlineQuoteForm.data;
      if (fields) {
        console.log(fields);
        const comment = fields.comment ? fields.comment : "";
        form.setValues({ ...fields, comment });
      }
      if (errors) {
        console.log(errors);
        const { fieldErrors } = errors;
        form.setErrors({ ...fieldErrors });
      }
    }
  }, [onlineQuoteForm]);

  return { form, submitQuote, onlineQuoteForm };
};

export default useBookingOnlineQuoteForm;
