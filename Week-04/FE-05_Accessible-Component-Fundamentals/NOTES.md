# FE-05 — Accessible Component Fundamentals

## Manual components
- Modal: dialog semantics, focus entry, Tab/Shift+Tab trap, Escape close, focus restoration.
- Tabs: tablist/tab/tabpanel, ARIA relationships, Arrow keys, Home/End, roving tabIndex.
- Disclosure: native button keyboard behavior, aria-expanded, aria-controls, hidden content.

## shadcn/ui / Base UI comparison
Current shadcn/ui defaults to Base UI for new projects. The local open-code comparison is in `playground/src/components/ui/dialog.tsx` and `playground/src/components/ui/tabs.tsx`.

### Concrete gaps
1. **Focus/lifecycle:** the manual modal implements focus capture, focus trapping, Escape and restoration itself; the Base UI primitive handles these behaviors.
2. **Composition:** the manual modal is a fixed component; shadcn exposes composable Dialog, Trigger, Content, Title and Description pieces.
3. **Tabs keyboard behavior:** the manual version manually handles arrows/Home/End and roving tabIndex; Base UI Tabs delegates selection and keyboard behavior to the primitive.
4. **Reusable source:** shadcn provides a consistent open-code component structure intended to be copied and customized, reducing repeated accessibility logic.

## Important
The original CLI attempt detected Vite and Tailwind v4 but stopped at its Tailwind validator. This final playground therefore preserves the working app and includes the open-code Base UI implementations for the required Dialog/Tabs source review. No claim is made that the failed CLI run completed successfully.
