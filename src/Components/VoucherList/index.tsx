import React, { useState } from "react";
import { Voucher } from "../Voucher";
import { KeySubmissionForm } from "../KeySubmissionForm";

const startingSerial = 1;

export const VoucherList = () => {
  const [keys, setKeys] = useState<string[]>([]);

  const hasKeys = keys && keys.length > 0;

  return (
    <div className="container">
      {hasKeys ? (
        keys.map((key, index) => (
          <Voucher key={index} serialNo={startingSerial + index} apiKey={key} breakAfter={index % 5 == 4} />
        ))
      ) : (
        <KeySubmissionForm onKeySubmission={setKeys} />
      )}
    </div>
  );
};
