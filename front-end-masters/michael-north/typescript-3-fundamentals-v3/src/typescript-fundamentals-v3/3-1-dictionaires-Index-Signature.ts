// index signatures.
type phone = {
  [k: string]: { country: string; area: string; number: string };
};

const phones: phone = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "652-4515" },
  fax: { country: "+1", area: "322", number: "652-4515" },
};

const phones2: phone = {};
