import { Form } from "@saas-ui/forms/zod";
import {
  FieldValues,
  FormLayout,
  SubmitButton,
  UseFormReturn,
  useFormContext,
} from "@saas-ui/react";
import Link from "next/link";
import { useRef } from "react";
import * as z from "zod";

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().optional(),
});

export default function BasicForm() {
  const formRef = useRef<UseFormReturn<FieldValues> | null>(null);
  const form = useFormContext();

  // @ts-ignore
  const onSubmit = (params) => {
    console.log(params);
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  console.log("hola", form, form.control);

  return (
    <>
      <Link href="/">Home</Link>

      <p>{formRef.current ? "Has form ref" : "No form ref"}</p>

      <Form
        formRef={formRef}
        schema={schema}
        defaultValues={{
          name: "Saas UI",
          description: "",
        }}
        onSubmit={onSubmit}
      >
        {({ Field }) => (
          <FormLayout>
            <p>
              Inside form: {formRef.current ? "Has form ref" : "No form ref"}
            </p>

            <Field
              name="name"
              label="Name"
              type="text"
              help="Choose a name for this project"
              rules={{ required: true }}
            />

            <Field
              name="description"
              type="textarea"
              label="Description"
              placeholder="Optional description"
            />

            <SubmitButton>Create Project</SubmitButton>
          </FormLayout>
        )}
      </Form>
    </>
  );
}
