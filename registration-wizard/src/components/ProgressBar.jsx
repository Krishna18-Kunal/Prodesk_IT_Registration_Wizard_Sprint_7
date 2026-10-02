function ProgressBar({ step }) {
  const percentage = (step / 3) * 100;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>Registration</span>
        <span>Step {step} of 3</span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;