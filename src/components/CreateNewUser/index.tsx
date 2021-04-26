// Formik + Typescript
// https://formik.org/docs/guides/typescript
// https://formik.org/docs/examples/typescript

// Formik validation with Yup
// https://formik.org/docs/guides/validation
// https://github.com/jquense/yup#api

// https://www.npmjs.com/package/react-date-picker

import { useState } from "react";
import PageHeader from "../PageHeader";
import { postNewUser } from "../../utils";
import { useTranslation } from "react-i18next";
// import DatePicker from "react-datepicker";
import DatePicker from "react-date-picker";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
//Yup for form validation
import * as Yup from "yup";
//styles
import "./CreateNewUser.scss";
import "react-datepicker/dist/react-datepicker.css";

interface FormValues {
  firstName: string;
  lastName: string;
  position: string;
  dateOfBirth: Date | null;
}

enum Positions {
  SoftwareEngineer = "Software Engineer",
  Painter = "Painter",
  BusDriver = "Bus driver",
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  position: "",
  dateOfBirth: null,
};

const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 18);

const CreateNewUser = () => {
  const [savedData, setSavedData] = useState(null as Object | null);
  const { t } = useTranslation();

  // TODO: Валидацию в use effect? что бы перевод происходил
  // Form Validation Schema
  //https://stackoverflow.com/questions/51222559/formik-yup-form-validation-not-working-as-expected-with-virtualizedselect
  //https://github.com/jquense/yup#mixednullableisnullable-boolean--true-schema
  const CreateNewUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[a-z\s]+$/i, "Only latin craracters pls")
      .required(t("form-validation.required")),
    lastName: Yup.string()
      .matches(/^[a-z\s]+$/i, "Only latin craracters pls")
      .required(t("form-validation.required")),
    dateOfBirth: Yup.date()
      .max(minDate, t("form-validation.over18years"))
      .required(t("form-validation.required"))
      .nullable(),
  });

  return (
    <div className="wrapper">
      <PageHeader title={t("page-headers.part3")} showButton={false} />
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
          setFieldValue,
          setFieldTouched,
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
              <DatePicker
                dayPlaceholder="dd"
                monthPlaceholder="mm"
                yearPlaceholder="yyyy"
                className={`date-picker ${
                  errors.dateOfBirth && touched.dateOfBirth ? "red" : "green"
                }`}
                name="dateOfBirth"
                value={values.dateOfBirth}
                // https://stackoverflow.com/questions/56312372/react-datepicker-with-a-formik-form
                onChange={async (inputValue) => {
                  console.log(inputValue);
                  await setFieldValue("dateOfBirth", inputValue, false);
                  setFieldTouched("dateOfBirth", true);
                }}
              />
              {touched.dateOfBirth && errors.dateOfBirth && (
                <div>{errors.dateOfBirth}</div>
              )}
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
