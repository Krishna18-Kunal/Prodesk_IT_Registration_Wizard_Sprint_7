import { useFormContext } from "react-hook-form";

function StepOnePersonal({ onNext }) {
  const {
    register,
    getFieldState,
    watch,
    formState: { errors },
  } = useFormContext();

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const dateOfBirth = watch("dateOfBirth");

  const firstNameState = getFieldState("firstName");
  const lastNameState = getFieldState("lastName");
  const dobState = getFieldState("dateOfBirth");

  const isValid =
    firstName?.trim() &&
    lastName?.trim() &&
    dateOfBirth &&
    !firstNameState.invalid &&
    !lastNameState.invalid &&
    !dobState.invalid;

  return (
    <div className="step-card">
      <div className="step-heading">
        <span className="step-number">01</span>

        <div>
          <h2>Personal Information</h2>
          <p>Tell us a little about yourself.</p>
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label>First Name</label>

          <input
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
          />

          {errors.firstName && (
            <p className="error">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="form-group">
          <label>Last Name</label>

          <input
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />

          {errors.lastName && (
            <p className="error">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="form-group">
        <label>Date of Birth</label>

        <input
          type="date"
          {...register("dateOfBirth")}
        />

        {errors.dateOfBirth && (
          <p className="error">
            {errors.dateOfBirth.message}
          </p>
        )}
      </div>

      <div className="button-row">
        <button
          type="button"
          className="primary-button"
          disabled={!isValid}
          onClick={onNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default StepOnePersonal;