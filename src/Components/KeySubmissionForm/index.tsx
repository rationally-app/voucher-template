import React, { useState, useEffect } from "react";
import { Button, TextArea } from "@blueprintjs/core";

const BACKGROUND_COLOR = "#F5F8FA";
const DATE_OPTS = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: false
};

const formatDate = (date: string | number) => new Date(Number(date)).toLocaleString("en-SG", DATE_OPTS);

export const KeySubmissionForm = ({
  onKeySubmission
}: {
  onKeySubmission: (keys: string[], endpoint: string, validFrom: string, validTill: string) => void;
}): React.ReactElement => {
  const [rawInput, setRawInput] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTill, setValidTill] = useState("");
  const [editableEndpoint, setEditableEndpoint] = useState(true);
  const [editableValidity, setEditableValidity] = useState(true);
  const [keys, setKeys] = useState<string[]>([]);

  const urlParams = new URLSearchParams(window.location.search);
  const endpointFromUrl = urlParams.get("endpoint");
  const validFromFromUrl = urlParams.get("validFrom");
  const validTillFromUrl = urlParams.get("validTill");

  useEffect(() => {
    if (endpointFromUrl) {
      setEndpoint(endpointFromUrl);
      setEditableEndpoint(false);
    }
    if (validFromFromUrl && validTillFromUrl) {
      setValidFrom(formatDate(validFromFromUrl));
      setValidTill(formatDate(validTillFromUrl));
      setEditableValidity(false);
    }
  }, [endpointFromUrl]);

  const validateInput = (input: string): void => {
    const keysFound = input.match(/[^\r\n]+/g);
    if (keysFound) setKeys(keysFound);
  };

  const onRawInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    validateInput(event.target.value);
    setRawInput(event.target.value);
  };

  return (
    <div className="container p-3" style={{ backgroundColor: BACKGROUND_COLOR }}>
      <h1>SupplyAlly Key Voucher Printer</h1>
      <div>This application is used to print authentication code used by the Rationally mobile app.</div>
      <div className="mt-3">Enter the endpoint that the application is connecting to:</div>
      <div>
        <input
          className="p-1 w-100"
          disabled={!editableEndpoint}
          value={endpoint}
          onChange={e => setEndpoint(e.target.value)}
          style={{ fontFamily: "monospace" }}
        />
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
      <div className="mt-3">Key Validity Period (JS UTC Timestamps)</div>
      <div>
        <input
          className="m-1"
          placeholder="From.."
          value={validFrom}
          onBlur={e => {
            setValidFrom(formatDate(e.target.value));
          }}
          onChange={e => setValidFrom(e.target.value)}
          disabled={!editableValidity}
        />
        <input
          className="m-1"
          placeholder="Till.."
          value={validTill}
          onBlur={e => {
            setValidTill(formatDate(e.target.value));
          }}
          onChange={e => setValidTill(e.target.value)}
          disabled={!editableValidity}
        />
      </div>
      <div className="d-flex flex-column align-items-end">
        <Button
          rightIcon="arrow-right"
          intent="success"
          text="Generate Printable Vouchers"
          onClick={() => {
            console.log(keys);
            onKeySubmission(keys, endpoint, validFrom, validTill);
          }}
        />
      </div>
      <div>
        <small>*Note: The voucher codes are generated on the browser and are not transmitted elsewhere.</small>
      </div>
    </div>
  );
};
