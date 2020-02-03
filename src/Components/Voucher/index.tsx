import React from "react";
import { QRCode } from "react-qr-svg";

const BACKGROUND_COLOR = "#F5F8FA";

export const Voucher = ({
  serialNo,
  apiKey,
  breakAfter
}: {
  serialNo: number | string;
  apiKey: string;
  breakAfter?: boolean;
}) => {
  return (
    <>
      <div className="row" style={{ backgroundColor: BACKGROUND_COLOR, marginTop: 10 }}>
        <div
          className="col-8 p-2 d-flex justify-content-between flex-column"
          style={{ borderRight: "2px dashed grey" }}
        >
          <div>
            <div>
              <strong>S/N: {serialNo}</strong>
            </div>
            <h5 className="text-dark mt-3 mb-2">Issuance Details</h5>
            <div>
              <div>Date:</div>
              <hr />
              <div>Name:</div>
              <hr />
              <div>NRIC/Staff ID:</div>
              <hr />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-end">
            <div className="text-dark">{apiKey}</div>
          </div>
        </div>
        <div className="col-4 p-2">
          <div className="p-2">
            <div className="text-center">
              <QRCode
                bgColor={BACKGROUND_COLOR}
                fgColor="#000000"
                level="H"
                style={{ width: "100%", maxWidth: 150 }}
                value={apiKey}
              />
            </div>
          </div>
          <div className="m-1 p-1" style={{ fontSize: "0.6em", borderStyle: "dotted", borderWidth: 2 }}>
            This key is issued to the personnel listed below and should not be shared. If found, please destroy this
            piece of paper.
          </div>
          <div className="d-flex ml-2 mr-2 mt-3">
            <div className="mr-2">Name:</div>
            <hr className="w-100" />
          </div>
        </div>
      </div>
      {breakAfter && <div style={{ pageBreakAfter: "always" }} />}
    </>
  );
};
