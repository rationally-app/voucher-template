import React from "react";
import { storiesOf } from "@storybook/react";
import { Voucher } from "./index";

const story = storiesOf("Components|Voucher", module);

story.add("Voucher", () => (
  <div className="container">
    <Voucher serialNo="0001" apiKey="2b4d67ac-2696-421d-b4cd-83b477e8ba7b" endpoint="https://example.com" validFrom="4/8/2020, 7:00:00 AM" validTill="4/8/2020, 10:30:00 PM" />
    <Voucher serialNo="0002" apiKey="2b4d67ac-2696-421d-b4cd-83b477e8ba7b" endpoint="https://example.com" validFrom="4/8/2020, 7:00:00 AM" validTill="4/8/2020, 10:30:00 PM" />
  </div>
));
