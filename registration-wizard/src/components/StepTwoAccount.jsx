import { useState } from "react";
import { useFormContext } from "react-hook-form";

function StepTwoAccount({ onNext, onBack }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const {
    register,
    getFieldState,
    watch,
    formState: { errors },
  } = useFormContext();

  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const emailState = getFieldState("email");
  const passwordState = getFieldState("password");
  const confirmPasswordState =
    getFieldState("confirmPassword");

  const isValid =
    email &&
    password &&
    confirmPassword &&
    !emailState.invalid &&
    !passwordState.invalid &&
    !confirmPasswordState.invalid;

  return (
    <div className="step-card">
      <div className="step-heading">
        <span className="step-number">02</span>

        <div>
          <h2>Account Details</h2>
          <p>Create your account credentials.</p>
        </div>
      </div>

      <div className="form-group">
        <label>Email Address</label>

        <input
          type="email"
          placeholder="example@email.com"
          {...register("email")}
        />

        {errors.email && (
          <p className="error">
            {errors.email.message}
          </p>
        )}

        {!errors.email && email && !email.includes("@") && (
          <p className="error">
            Email must contain an @ symbol.
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Password</label>

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Minimum 8 characters"
            {...register("password")}
          />

          <button
            type="button"
            className="eye-button"
            onClick={() =>
              setShowPassword((previous) => !previous)
            }
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {errors.password && (
          <p className="error">
            {errors.password.message}
          </p>
        )}

        {!errors.password &&
          password &&
          password.length < 8 && (
            <p className="error">
              Password must be at least 8 characters.
            </p>
          )}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>

        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            {...register("confirmPassword")}
          />

          <button
            type="button"
            className="eye-button"
            onClick={() =>
              setShowConfirmPassword(
                (previous) => !previous
              )
            }
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="error">
            {errors.confirmPassword.message}
          </p>
        )}

        {!errors.confirmPassword &&
          confirmPassword &&
          password !== confirmPassword && (
            <p className="error">
              Passwords do not match.
            </p>
          )}
      </div>

      <div className="button-row">
        <button
          type="button"
          className="secondary-button"
          onClick={onBack}
        >
          ← Back
        </button>

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

export default StepTwoAccount;