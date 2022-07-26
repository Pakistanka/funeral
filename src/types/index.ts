export type TPhoto = {
  "name": string;
  "filepath": string;
  "thumbpath": string;
};
  
export type TCompany = {
  "id": string;
  "contactId": string;
  "name": string;
  "shortName": string;
  "businessEntity": string;
  "contract": {
     "no": string;
     "issue_date": string;
  },
  "type": Array<string>;
  "status": string;
  "photos": Array<TPhoto>;
  "createdAt": string;
  "updatedAt": string;
};

export type TContact = {
  "id": string;
  "lastname": string;
  "firstname": string;
  "patronymic": string;
  "phone": string;
  "email": string;
  "createdAt": string;
  "updatedAt": string;
};
