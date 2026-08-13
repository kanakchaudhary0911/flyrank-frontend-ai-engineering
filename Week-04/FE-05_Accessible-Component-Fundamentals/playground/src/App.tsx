import { useState } from "react";
import { Modal } from "./components/Modal";
import { Tabs as ManualTabs } from "./components/Tabs";
import { Disclosure } from "./components/Disclosure";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="app">
      <header>
        <p className="eyebrow">FE-05 · Week 4</p>

        <h1>Accessible Components Playground</h1>

        <p>
          Keyboard-accessible React + TypeScript implementations based on
          WAI-ARIA patterns.
        </p>
      </header>

      {/* Modal */}
      <section className="demo-card">
        <h2>1. Modal Dialog</h2>

        <button onClick={() => setOpen(true)}>
          Open Modal
        </button>

        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Accessible Modal"
        >
          <p>
            Tab and Shift+Tab stay within the dialog. Escape closes it.
          </p>

          <label>
            Example input
            <input placeholder="Type something..." />
          </label>
        </Modal>
      </section>

      {/* Tabs */}
      <section className="demo-card">
        <h2>2. Tabs</h2>

        <ManualTabs
          tabs={[
            {
              id: "overview",
              label: "Overview",
              content: <p>Overview panel.</p>,
            },
            {
              id: "features",
              label: "Features",
              content: (
                <p>
                  Arrow keys, Home and End navigate the tabs.
                </p>
              ),
            },
            {
              id: "a11y",
              label: "Accessibility",
              content: (
                <p>
                  ARIA tab relationships and keyboard navigation are
                  implemented.
                </p>
              ),
            },
          ]}
        />
      </section>

      {/* Disclosure */}
      <section className="demo-card">
        <h2>3. Disclosure</h2>

        <Disclosure title="What is accessibility?">
          <p>
            Accessibility supports people using different abilities and
            input methods.
          </p>
        </Disclosure>
      </section>

      {/* Shadcn comparison */}
      <section className="demo-card">
        <h2>4. shadcn/ui Source Review</h2>

        <p>
          The shadcn/Base UI Dialog and Tabs source files are included in:
        </p>

        <code>src/components/ui/</code>

        <p>
          See <strong>NOTES.md</strong> for the comparison between the
          hand-built components and shadcn/ui.
        </p>
      </section>
    </main>
  );
}