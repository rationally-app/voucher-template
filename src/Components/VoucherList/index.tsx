import React, { useState } from "react";
import { Voucher } from "../Voucher";
import { KeySubmissionForm } from "../KeySubmissionForm";

const startingSerial = 1;

export const VoucherList = (): React.ReactElement => {
  const [keys, setKeys] = useState<string[]>([]);
  const [endpoint, setEndpoint] = useState("");

  const onKeySubmission = (submittedKeys: string[], submittedEndpoint: string): void => {
    setKeys(submittedKeys);
    setEndpoint(submittedEndpoint);
  };

  const hasKeys = keys && keys.length > 0;

  return (
    <div className="container">
      {hasKeys ? (
        keys.map((key, index) => (
          <Voucher
            key={index}
            endpoint={endpoint}
            serialNo={startingSerial + index}
            apiKey={key}
            breakAfter={index % 5 == 4}
          />
        ))
      ) : (
        <KeySubmissionForm onKeySubmission={onKeySubmission} />
      )}
    </div>
  );
};
