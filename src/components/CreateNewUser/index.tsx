// Formik + Typescript
// https://formik.org/docs/guides/typescript
// https://formik.org/docs/examples/typescript

// Formik validation with Yup
// https://formik.org/docs/guides/validation
// https://github.com/jquense/yup#api

// https://www.npmjs.com/package/react-date-picker

//https://stackoverflow.com/questions/51222559/formik-yup-form-validation-not-working-as-expected-with-virtualizedselect
//https://github.com/jquense/yup#mixednullableisnullable-boolean--true-schema

// https://codesandbox.io/s/vxv6q4z5?file=/index.js:943-949

// https://stackoverflow.com/questions/56312372/react-datepicker-with-a-formik-form

import { useState } from "react";
import PageHeader from "../PageHeader";
import { postNewUser } from "../../utils";
import { useTranslation } from "react-i18next";
import DatePicker from "react-date-picker";
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
//Yup for form validation
import * as Yup from "yup";
//styles
import "./CreateNewUser.scss";

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

  // Form Validation Schema
  const CreateNewUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[a-z\s]+$/i, t("form.form-validation.name"))
      .required(t("form.form-validation.required")),
    lastName: Yup.string()
      .matches(/^[a-z\s]+$/i, t("form.form-validation.name"))
      .required(t("form.form-validation.required")),
    dateOfBirth: Yup.date()
      .max(minDate, t("form.form-validation.over18years"))
      .required(t("form.form-validation.required"))
      .nullable(),
  });

  return (
    <div className="wrapper">
      <PageHeader title={t("page-headers.part3")} showButton={false} />
      <div className="form-wrapper">
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
            <Form className="create-new-user-form">
              <div className="label">
                <label>
                  {t("form.first-name")}

                  <Field
                    className={`input ${
                      errors.firstName &&
                      touched.firstName &&
                      "validation-error"
                    }`}
                    name="firstName"
                    placeholder={t("form.placeholder.first-name")}
                    required
                  />
                  <div className="validation-error-message">
                    {errors.firstName &&
                      touched.firstName &&
                      `${errors.firstName}`}
                  </div>
                </label>
              </div>

              <div className="label">
                <label>
                  {t("form.last-name")}
                  <Field
                    className={`input ${
                      errors.lastName && touched.lastName && "validation-error"
                    }`}
                    name="lastName"
                    placeholder={t("form.placeholder.last-name")}
                    required
                  />
                  <div className="validation-error-message">
                    {errors.lastName &&
                      touched.lastName &&
                      `${errors.lastName}`}
                  </div>
                </label>
              </div>

              <div className="label">
                <label>
                  {t("form.occupation")}

                  <select
                    className="input"
                    onChange={handleChange}
                    name="position"
                    value={values.position}
                    required
                  >
                    <option
                      value=""
                      label={t("form.placeholder.occupation")}
                      disabled
                      hidden
                    />
                    <option value={Positions.SoftwareEngineer}>
                      {t("Positions.SoftwareEngineer")}
                    </option>
                    <option value={Positions.Painter}>
                      {t("Positions.Painter")}
                    </option>
                    <option value={Positions.BusDriver}>
                      {t("Positions.BusDriver")}
                    </option>
                  </select>
                </label>
              </div>

              <div className="label">
                <label>
                  {t("form.date-of-birth")}
                  <DatePicker
                    dayPlaceholder="dd"
                    monthPlaceholder="mm"
                    yearPlaceholder="yyyy"
                    className={`input ${
                      errors.lastName && touched.lastName && "validation-error"
                    }`}
                    name="dateOfBirth"
                    value={values.dateOfBirth}
                    onChange={async (inputValue) => {
                      console.log(inputValue);
                      await setFieldValue("dateOfBirth", inputValue, false);
                      setFieldTouched("dateOfBirth", true);
                    }}
                  />
                  <div className="validation-error-message">
                    {errors.dateOfBirth &&
                      touched.dateOfBirth &&
                      `${errors.dateOfBirth}`}
                  </div>
                </label>
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      {savedData && (
        <div>
          {t("form.response-result")} {JSON.stringify(savedData)}
        </div>
      )}
    </div>
  );
};

export default CreateNewUser;

// https://medium.com/flyparakeet/react-formik-styled-components-add78b37971f

// https://formik.org/docs/guides/validation
// https://github.com/jquense/yup#api

// https://www.npmjs.com/package/react-date-picker

// https://formik.org/docs/guides/validation
