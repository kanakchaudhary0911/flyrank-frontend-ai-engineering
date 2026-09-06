import { useEffect, useRef, useState } from "react";
import "./App.css";

type ButtonState = "idle" | "loading" | "success" | "error";

function App() {
  const [state, setState] = useState<ButtonState>("idle");
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleAction = (
    result: "success" | "error",
    autoReset = true
  ) => {
    if (state === "loading") return;

    setState("loading");

    timerRef.current = window.setTimeout(() => {
      setState(result);

      if (autoReset) {
        timerRef.current = window.setTimeout(() => {
          setState("idle");
        }, 1400);
      }
    }, 1200);
  };

  const resetButton = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }

    setState("idle");
  };

  const getButtonContent = () => {
    switch (state) {
      case "loading":
        return (
          <>
            <span className="spinner" aria-hidden="true" />
            Generating...
          </>
        );

      case "success":
        return (
          <>
            <span className="status-icon" aria-hidden="true">
              ✓
            </span>
            Success!
          </>
        );

      case "error":
        return (
          <>
            <span className="status-icon" aria-hidden="true">
              !
            </span>
            Try Again
          </>
        );

      default:
        return "Generate";
    }
  };

  return (
    <main className="page">
      <section className="demo-card">
        <p className="eyebrow">FE-AA1</p>

        <h1>Buttons with a Brain</h1>

        <p className="subtitle">
          Motion & State Micro-interactions
        </p>

        <div
          className={`smart-button-wrapper state-${state}`}
          aria-live="polite"
        >
          <button
            className="smart-button"
            onClick={() => handleAction("success")}
            disabled={state === "loading"}
          >
            <span className="button-content">
              {getButtonContent()}
            </span>
          </button>
        </div>

        <div className="controls">
          <button onClick={() => handleAction("success", false)}>
            Force Success
          </button>

          <button onClick={() => handleAction("error", false)}>
            Force Error
          </button>

          <button onClick={resetButton}>
            Reset
          </button>
        </div>

        <p className="state-label">
          Current state: <strong>{state}</strong>
        </p>
      </section>
    </main>
  );
}

export default App;