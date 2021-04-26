import { useState } from "react";
import PageHeader from "../PageHeader";
import { postNewUser, maxAllowedDateOfBirth } from "../../utils";
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
      .max(maxAllowedDateOfBirth(), t("form.form-validation.over18years"))
      .required(t("form.form-validation.required"))
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
          <Form className="form">
            <div className="form__element-wrapper">
              <label>
                {t("form.first-name")}
                <Field
                  className={`form__input ${
                    errors.firstName &&
                    touched.firstName &&
                    "form__validation-error"
                  }`}
                  name="firstName"
                  placeholder={t("form.placeholder.first-name")}
                  required
                />
                <div className="form__validation-error-message">
                  {errors.firstName &&
                    touched.firstName &&
                    `${errors.firstName}`}
                </div>
              </label>
            </div>

            <div className="form__element-wrapper">
              <label>
                {t("form.last-name")}
                <Field
                  className={`form__input ${
                    errors.lastName &&
                    touched.lastName &&
                    "form__validation-error"
                  }`}
                  name="lastName"
                  placeholder={t("form.placeholder.last-name")}
                  required
                />
                <div className="form__validation-error-message">
                  {errors.lastName && touched.lastName && `${errors.lastName}`}
                </div>
              </label>
            </div>

            <div className="form__element-wrapper">
              <label>
                {t("form.occupation")}
                <select
                  className="form__input"
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

            <div className="form__element-wrapper">
              <label>
                {t("form.date-of-birth")}
                <DatePicker
                  dayPlaceholder="dd"
                  monthPlaceholder="mm"
                  yearPlaceholder="yyyy"
                  className={`form__input form__date-picker ${
                    errors.dateOfBirth &&
                    touched.dateOfBirth &&
                    "form__validation-error"
                  }`}
                  name="dateOfBirth"
                  value={values.dateOfBirth}
                  onChange={async (inputValue) => {
                    await setFieldValue("dateOfBirth", inputValue);
                    setFieldTouched("dateOfBirth", true);
                  }}
                />
                <div className="form__validation-error-message">
                  {errors.dateOfBirth &&
                    touched.dateOfBirth &&
                    `${errors.dateOfBirth}`}
                </div>
              </label>
            </div>

            <div className="form__submit">
              <button className="create-new-user-button " type="submit">
                {t("create-new-user-button")}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      <div>
        {savedData &&
          `${t("form.response-result")} ${JSON.stringify(savedData)}`}
      </div>
    </div>
  );
};

export default CreateNewUser;
