import React from "react";
import { QRCode } from "react-qr-svg";
import { css } from "@emotion/core";

const BACKGROUND_COLOR = "#F5F8FA";

export const Voucher = ({
  endpoint,
  serialNo,
  apiKey,
  breakAfter,
  validFrom,
  validTill,
  distEnv
}: {
  endpoint: string;
  serialNo: number | string;
  apiKey: string;
  breakAfter?: boolean;
  validFrom: string;
  validTill: string;
  distEnv: string;
}): React.ReactElement => {
  const qrCode = JSON.stringify({ key: apiKey, endpoint });
  return (
    <>
      <div className="row" style={{ backgroundColor: BACKGROUND_COLOR, border: "1px solid lightgrey", marginTop: 10 }}>
        <div
          className="col-8 p-2 d-flex justify-content-between flex-column"
          style={{ borderRight: "2px dashed grey" }}
        >
          <div>
            <div className="row">
              <div className="col-4">
                <strong>S/N: {serialNo}</strong>
              </div>
              <div className="col-8 text-right">
                <div className="">Valid from: {validFrom} </div>
                <div className="">Valid till: {validTill}</div>
              </div>
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
          <div className="d-flex justify-content-between flex-column">
            <div className="text-dark">{endpoint}</div>
            <div className="text-dark">{apiKey}</div>
          </div>
        </div>
        <div className="col-4 p-2">
          <div>
            <strong>S/N: {serialNo}</strong>
          </div>
          <div className="p-2">
            <div className="text-center d-flex flex-column align-items-center">
              <div style={{ maxWidth: 200 }}>
                <QRCode
                  bgColor={BACKGROUND_COLOR}
                  fgColor="#000000"
                  level="H"
                  style={{ width: "100%" }}
                  value={qrCode}
                />
                <div
                  className="p-2"
                  css={css`
                    min-height: 40px;
                    position: relative;
                    overflow: hidden;
                    ::before {
                      content: "";
                      position: absolute;
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                      border-left: 100vw solid black;
                      z-index: 0;
                    }
                  `}
                >
                  <span
                    css={css`
                      position: relative;
                      font-weight: bold;
                      font-size: 1rem;
                      z-index: 1;
                      color: white;
                      -webkit-print-color-adjust: exact;
                    `}
                  >
                    {distEnv}
                  </span>
                </div>
              </div>
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
