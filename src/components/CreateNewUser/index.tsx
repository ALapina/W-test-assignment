// https://formik.org/docs/guides/typescript

// https://formik.org/docs/examples/typescript

// https://formik.org/docs/guides/validation
// https://github.com/jquense/yup#api

// https://www.npmjs.com/package/react-date-picker

import { useState } from "react";

import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";

//Yup for form validation
import * as Yup from "yup";

//components
import PageHeader from "../PageHeader";

//styles
import "./CreateNewUser.scss";

const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 18);

interface FormValues {
  firstName: string;
  lastName: string;
  position: string;
  date: Date | string;
}

enum Positions {
  SoftwareEngineer = "Software Engineer",
  Painter = "Painter",
  BusDriver = "Bus driver",
}

//https://stackoverflow.com/questions/51222559/formik-yup-form-validation-not-working-as-expected-with-virtualizedselect
// https://github.com/jquense/yup#mixednullableisnullable-boolean--true-schema
const CreateNewUserSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-z\s]+$/i, "Only latin craracters pls")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[a-z\s]+$/i, "Only latin craracters pls")
    .required("Required"),
  date: Yup.date()
    .max(minDate, "Sorry you must be 18 years old")
    .required("Required"),
});

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
async function postNewUser(url: string, data: FormValues): Promise<Object> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

const CreateNewUser = () => {
  const [savedData, setSavedData] = useState(null as Object | null);

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    position: "",
    date: "",
  };
  return (
    <div className="wrapper">
      <PageHeader title={"Create New User"} showButton={false} />
      <Formik
        initialValues={initialValues}
        validationSchema={CreateNewUserSchema}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          postNewUser("https://reqres.in/api/users/", values)
            .then((data) => {
              setSavedData(data);
              console.log(data);
            })
            .catch((error) => console.error(error));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
        }: FormikProps<FormValues>) => (
          <Form>
            <label>
              First Name:
              <Field
                name="firstName"
                placeholder="enter your first name"
                required
              />
              {errors.firstName && touched.firstName && (
                <div>{errors.firstName}</div>
              )}
            </label>
            <br />
            <label>
              Last Name:
              <Field
                className={errors.lastName && touched.lastName ? "red" : null}
                name="lastName"
                placeholder="enter your last name"
                required
              />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
            </label>
            <br />

            <label>
              Occupation
              {/* https://codesandbox.io/s/vxv6q4z5?file=/index.js:943-949 */}
              <select
                onChange={handleChange}
                name="position"
                value={values.position}
                required
              >
                <option value="" label="Select occupation" disabled hidden />
                <option value={Positions.SoftwareEngineer}>
                  {Positions.SoftwareEngineer}
                </option>
                <option value={Positions.Painter}>{Positions.Painter}</option>
                <option value={Positions.BusDriver}>
                  {Positions.BusDriver}
                </option>
              </select>
            </label>
            <br />

            <label>
              Date of Birth:
              <Field
                required
                type="date"
                name="date"
                className={`date-picker ${errors.date ? "red" : "green"}`}
              />
              {errors.date && touched.date ? <div>{errors.date}</div> : null}
            </label>

            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {savedData && <div>Response result: {JSON.stringify(savedData)}</div>}
    </div>
  );
};

export default CreateNewUser;

// https://medium.com/flyparakeet/react-formik-styled-components-add78b37971f

// https://formik.org/docs/guides/validation
// https://github.com/jquense/yup#api

// https://www.npmjs.com/package/react-date-picker

// https://formik.org/docs/guides/validation
