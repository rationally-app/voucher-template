import React from "react";
import { Voucher } from "../Voucher";

const startingSerial = 1;

const keys = [
  "ac3cb9a9-eb03-49e4-9158-91eca7958469",
  "550b5a28-3e26-4616-9b9f-9ef0bdc9688f",
  "c3730880-f202-4e7c-a82e-f9b6e7b6842d",
  "9fc1c138-330a-4807-a22a-aceff7daf28d",
  "d6b54920-6dc3-45dc-889b-cafeb5e20971",
  "8a64b8fb-8276-463c-b11f-16da53f7c678",
  "16b4a104-d2bf-48df-b6e7-7a7209c5d511",
  "00829bcf-1c4b-48c2-a512-0c5560765820",
  "4c615713-5f51-4360-a9a2-de116ce59294",
  "0f18a8fa-0e25-4185-9f24-a207d55a209b",
  "04368585-2826-42a6-a408-52bba80d3352",
  "4b5afdf5-b572-43b6-b220-430872a5f390",
  "0086feed-92cb-47e3-9214-d6b2bef4b07a",
  "a8ed957a-69ec-477d-b178-6f9eb75ef865",
  "c8a4480a-a659-429a-ac24-acf92c44ced2",
  "32cf1064-edb3-4588-91a8-de6926cbae18",
  "c55cf43c-f4c6-4c2e-9a88-71dcb15e7fb9",
  "c31d160e-8a30-4f1f-8036-f76ac71efb05",
  "60b78d2b-45bd-4a4a-a06f-841974ca0a58",
  "f443a739-3cc3-48d7-818a-e2f3de542cc9",
  "48b75325-e097-497c-b80b-adbc2f2625a2",
  "4c5b1c0a-d4fc-4d6c-9204-442eb352f2e4",
  "c565719c-878b-4e7c-9738-1b5bd399afec",
  "b644b00d-73d6-4184-9e81-b38d7a68e452",
  "aa22739e-3f95-48a3-ac23-55071a69bd5e",
  "4bd0818c-bc79-4d26-a02c-50931637c9e2",
  "dd2730fe-2038-418e-a90f-9af7ade9f870",
  "86376c35-0c9a-4226-b247-9d0ea92c28ac",
  "391fe003-d2ee-45fd-9476-c9e9ac36bbde",
  "5256c024-4411-4d7a-868e-58ee7e0de3c6",
  "eab37b42-1c5a-4807-8717-f77b082cb86d",
  "61bb4e29-03a9-4e5a-a95c-63505dc0206d",
  "82b94c71-0425-4bbd-a270-6746cd48813e",
  "dad555db-62c7-4bca-abf0-92433e599567",
  "012096db-6e12-41b2-88bc-389056b673c2",
  "04e1c9e3-b2dd-48f1-802b-c23b7378a464",
  "93375eb0-347b-4acd-96fa-44e20e2760bf",
  "d4b41cba-4dbb-4d86-9442-d54282ebcfca",
  "6a612f16-3479-4df4-8153-ce969ec3d9af",
  "77faed12-3662-4f33-9838-a62def64a1b1",
  "069b0194-b0a6-4ef6-8504-51cd8b744a5c",
  "3c12a86a-a03c-4b10-847d-38ecc859c923",
  "d281c8e3-9441-4581-bb1d-c2cf61783099",
  "eed99c98-687e-46cb-bc76-dd0d9dc2e3ac",
  "d27cb9ce-f25c-449e-88bb-6763bdb624a4",
  "0d7197e6-62fd-4c3f-ba45-10d70682f72b",
  "ea9957e5-b6d3-42c3-84d4-ba17425f6abc",
  "8fbd4df6-cf23-4d7b-9560-fa40f3d8d1a6",
  "6efb6bfc-2494-4140-8ebe-75d77b8650df",
  "d42adb0b-792c-43de-9d8b-2f3823e5d34c"
];

export const VoucherList = () => {
  return (
    <div className="container">
      {keys.map((key, index) => (
        <Voucher serialNo={startingSerial + index} apiKey={key} breakAfter={index % 5 == 4} />
      ))}
    </div>
  );
};
