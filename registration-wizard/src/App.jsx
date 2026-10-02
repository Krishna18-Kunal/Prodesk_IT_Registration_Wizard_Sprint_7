import { useState } from "react";
import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { registrationSchema } from "./validation/registrationSchema";

import ProgressBar from "./components/ProgressBar";
import StepOnePersonal from "./components/StepOnePersonal";
import StepTwoAccount from "./components/StepTwoAccount";
import StepThreeReview from "./components/StepThreeReview";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const methods = useForm({
    resolver: zodResolver(registrationSchema),

    mode: "onChange",

    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    shouldUnregister: false,
  });

  const {
    trigger,
    getValues,
    handleSubmit,
  } = methods;

  const goToStepTwo = async () => {
    const valid = await trigger([
      "firstName",
      "lastName",
      "dateOfBirth",
    ]);

    if (valid) {
      setStep(2);
    }
  };

  const goToStepThree = async () => {
    const valid = await trigger([
      "email",
      "password",
      "confirmPassword",
    ]);

    if (valid) {
      setStep(3);
    }
  };

  const goBack = () => {
    setStep((previousStep) => previousStep - 1);
  };

  const submitRegistration = () => {
    const finalData = getValues();

    console.log("FINAL REGISTRATION PAYLOAD:");
    console.log(finalData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="app">
        <div className="success-screen">
          <div className="success-icon">✓</div>

          <h1>Registration Successful!</h1>

          <p>
            Your registration data has been successfully
            compiled.
          </p>

          <button
            className="primary-button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              methods.reset();
            }}
          >
            Register Another User
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="wizard-container">

        <div className="brand">
          <div className="brand-logo">R</div>

          <div>
            <h1>Registration Wizard</h1>
            <p>Create your account in 3 simple steps</p>
          </div>
        </div>

        <ProgressBar step={step} />

        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(submitRegistration)}
            noValidate
          >
            {step === 1 && (
              <StepOnePersonal
                onNext={goToStepTwo}
              />
            )}

            {step === 2 && (
              <StepTwoAccount
                onNext={goToStepThree}
                onBack={goBack}
              />
            )}

            {step === 3 && (
              <StepThreeReview
                onBack={goBack}
                onSubmit={submitRegistration}
              />
            )}
          </form>
        </FormProvider>

      </div>
    </div>
  );
}

export default App;