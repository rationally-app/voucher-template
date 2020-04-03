import React, { useState, useEffect } from "react";
import { Button, TextArea } from "@blueprintjs/core";

const BACKGROUND_COLOR = "#F5F8FA";

export const KeySubmissionForm = ({
  onKeySubmission
}: {
  onKeySubmission: (keys: string[], endpoint: string) => void;
}) => {
  const [rawInput, setRawInput] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [editableEndpoint, setEditableEndpoint] = useState(true);
  const [keys, setKeys] = useState<string[]>([]);

  const urlParams = new URLSearchParams(window.location.search);
  const endpointFromUrl = urlParams.get("endpoint");

  useEffect(() => {
    if (endpointFromUrl) {
      setEndpoint(endpointFromUrl);
      setEditableEndpoint(false);
    }
  }, [endpointFromUrl]);

  const validateInput = (input: string) => {
    const keysFound = input.match(/[^\r\n]+/g);
    if (keysFound) setKeys(keysFound);
  };

  const onRawInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    validateInput(event.target.value);
    setRawInput(event.target.value);
  };

  return (
    <div className="container p-3" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <h1>Rationally Key Voucher Printer</h1>
      <div>This application is used to print authentication code used by the Rationally mobile app.</div>
      <div className="mt-3">Enter the endpoint that the application is connecting to:</div>
      <div>
        <input
          className="p-1 w-100"
          disabled={!editableEndpoint}
          value={endpoint}
          onChange={e => setEndpoint(e.target.value)}
          style={{ fontFamily: "monospace" }}
        ></input>
      </div>
      <div className="mt-3">Enter the list of keys below (one key per line):</div>
      <div className="mt-2 mb-2">
        <div className="d-flex flex-column align-items-end">
          <TextArea
            className="bp3-fill mb-1"
            // growVertically={true}
            large={true}
            onChange={onRawInputChange}
            value={rawInput}
            style={{ height: 200, fontFamily: "monospace" }}
          />
          <div>{keys.length} keys</div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end">
        <Button
          rightIcon="arrow-right"
          intent="success"
          text="Generate Printable Vouchers"
          onClick={() => {
            console.log(keys);
            onKeySubmission(keys, endpoint);
          }}
        />
      </div>
      <div>
        <small>*Note: The voucher codes are generated on the browser and are not transmitted elsewhere.</small>
      </div>
    </div>
  );
};
