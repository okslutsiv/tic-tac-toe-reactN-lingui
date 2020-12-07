import React, { useGlobal, useDispatch } from "reactn";
import { Trans } from "@lingui/macro";

export default function History() {
  const [history] = useGlobal("history");
  const [currentStep] = useGlobal("currentStep");
  const setCurrentStep = useDispatch("setCurrentStep");
  return (
    <ol style={{ paddingLeft: 0, width: "100%" }}>
      {history.map((_, step) => (
        <li key={step} style={{ width: "100%", minWidth: 110 }}>
          <button
            disabled={step === currentStep}
            onClick={() => setCurrentStep(step)}
            style={{ width: "100%", minWidth: 110 }}
          >
            {step === 0 ? (
              <Trans>Start the game</Trans>
            ) : (
              <Trans>Go to move {step + 1}</Trans>
            )}
          </button>
        </li>
      ))}
    </ol>
  );
}
