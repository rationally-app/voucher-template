import React from "react";
import { storiesOf } from "@storybook/react";
import { KeySubmissionForm } from "./index";

const story = storiesOf("Components|Voucher", module);

story.add("Key Submission Form", () => (
  <div className="container">
    <KeySubmissionForm onKeySubmission={console.log} />
  </div>
));
