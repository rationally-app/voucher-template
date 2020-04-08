import React, { useState } from "react";
import { Voucher } from "../Voucher";
import { KeySubmissionForm } from "../KeySubmissionForm";

const startingSerial = 1;

export const VoucherList = (): React.ReactElement => {
  const [keys, setKeys] = useState<string[]>([]);
  const [endpoint, setEndpoint] = useState("");
  const [validityPeriod, setValidityPeriod] = useState<{from: string, till: string}>({from: "", till: ""})

  const onKeySubmission = (submittedKeys: string[], submittedEndpoint: string, validFrom: string, validTill:string): void => {
    setKeys(submittedKeys);
    setEndpoint(submittedEndpoint);
    setValidityPeriod({from: validFrom, till: validTill});
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
            validFrom={validityPeriod.from}
            validTill={validityPeriod.till}
            breakAfter={index % 5 == 4}
          />
        ))
      ) : (
        <KeySubmissionForm onKeySubmission={onKeySubmission} />
      )}
    </div>
  );
};
