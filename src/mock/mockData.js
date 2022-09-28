import mock from "./mock.json";

export const mockNameList = mock.map((el) => ({
  value: el.id,
  display: el.name,
}));

export const mockUserList = mock
  .map((el) => ({
    value: el.id,
    display: el.username,
  }))
  .splice(0, 3);

export const mockEmailList = mock.map((el) => ({
  value: el.id,
  display: el.email,
}));

export const mockAddressList = mock.map((el) => ({
  value: el.id,
  display: `${el.address.zipcode}, ${el.address.street}, ${el.address.city}, ${el.address.suite}`,
}));

export const mockPhoneList = mock.map((el) => ({
  value: el.id,
  display: el.phone,
}));

export const mockWebsiteList = mock.map((el) => ({
  value: el.id,
  display: el.website,
}));

export const mockCompanyList = mock.map((el) => ({
  value: el.id,
  display: el.company.name,
}));

export const mockSearchConfigOne = [
  {
    key: "name",
    label: "Name",
    type: "input",
    value: null,
    attrs: {
      placeholder: "Enter a Name",
    },
    multiple: true,
  },
  {
    key: "userName",
    label: "User Name",
    type: "autocomplete",
    value: null,
    attrs: {
      placeholder: "Input or select a userName",
    },
    multiple: true,
    options: mockUserList,
  },
  {
    key: "phone",
    label: "Phone",
    type: "autocomplete",
    value: null,
    options: mockPhoneList,
  },
  {
    key: "address",
    label: "Address",
    type: "autocomplete",
    value: null,
    options: mockAddressList,
  },
];

export const mockSearchConfigTwo = [
  {
    key: "postId",
    label: "Post ID",
    type: "input",
    value: null,
  },
  {
    key: "author",
    label: "Author",
    type: "autocomplete",
    value: null,
  },
  {
    key: "email",
    label: "Email",
    type: "autocomplete",
    value: null,
  },
];
