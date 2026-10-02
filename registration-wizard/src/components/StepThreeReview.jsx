import { useFormContext } from "react-hook-form";

function StepThreeReview({ onBack, onSubmit }) {
  const { watch } = useFormContext();

  const formData = watch();

  return (
    <div className="step-card">
      <div className="step-heading">
        <span className="step-number">03</span>

        <div>
          <h2>Review & Submit</h2>
          <p>Check your information before submitting.</p>
        </div>
      </div>

      <div className="review-box">
        <div className="review-section">
          <h3>Personal Information</h3>

          <div className="review-row">
            <span>First Name</span>
            <strong>{formData.firstName}</strong>
          </div>

          <div className="review-row">
            <span>Last Name</span>
            <strong>{formData.lastName}</strong>
          </div>

          <div className="review-row">
            <span>Date of Birth</span>
            <strong>{formData.dateOfBirth}</strong>
          </div>
        </div>

        <div className="review-section">
          <h3>Account Information</h3>

          <div className="review-row">
            <span>Email</span>
            <strong>{formData.email}</strong>
          </div>

          <div className="review-row">
            <span>Password</span>
            <strong>••••••••</strong>
          </div>
        </div>
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
          className="success-button"
          onClick={onSubmit}
        >
          Submit Registration ✓
        </button>
      </div>
    </div>
  );
}

export default StepThreeReview;