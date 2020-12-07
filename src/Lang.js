import React from "react";
import { Trans } from "@lingui/macro";
import { locales, dynamicActivate } from "./i18n";
import { useLingui } from "@lingui/react";

export default function LangSwitch() {
  const { i18n } = useLingui();

  return (
    <div>
      <span>
        <Trans>Switch to </Trans>
      </span>{" "}
      <span>
        {Object.keys(locales).map((locale, index) => (
          <button
            type="button"
            onClick={() => dynamicActivate(Object.keys(locales)[index])}
            key={locale}
            style={{
              display: locale !== i18n.locale ? "inline-block" : "none",
            }}
          >
            {locales[locale]}
          </button>
        ))}
      </span>
    </div>
  );
}
