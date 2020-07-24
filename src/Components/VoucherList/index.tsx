import React, { useState } from "react";
import { Voucher } from "../Voucher";
import { KeySubmissionForm } from "../KeySubmissionForm";

const startingSerial = 1;

export const VoucherList = (): React.ReactElement => {
  const [keys, setKeys] = useState<string[]>([]);
  const [endpoint, setEndpoint] = useState("");
  const [validityPeriod, setValidityPeriod] = useState<{ from: string; till: string }>({ from: "", till: "" });
  const [singleQrPerPage, setSingleQrPerPage] = useState(false);
  const [distEnv, setDistEnv] = useState("");

  const onKeySubmission = (
    submittedKeys: string[],
    submittedEndpoint: string,
    validFrom: string,
    validTill: string,
    distEnv: string,
    singleQrPerPage = false
  ): void => {
    setKeys(submittedKeys);
    setEndpoint(submittedEndpoint.replace(/\/+$/, ""));
    setValidityPeriod({ from: validFrom, till: validTill });
    setSingleQrPerPage(singleQrPerPage);
    setDistEnv(distEnv);
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
            breakAfter={singleQrPerPage || index % 3 == 2}
            distEnv={distEnv}
          />
        ))
      ) : (
        <KeySubmissionForm onKeySubmission={onKeySubmission} />
      )}
    </div>
  );
};
