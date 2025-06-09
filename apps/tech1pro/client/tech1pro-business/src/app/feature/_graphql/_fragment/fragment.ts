import { gql } from 'apollo-angular';

export const onAddressFragment = gql`fragment addressFields on Address {
    streetAddress
    state
    city
    zipcode
}`;

export const onContactFragment = gql`fragment contactFields on Contact {
  created
  firstname
  lastname
  email
  id
  phone
  displayName
  address {
    ...addressFields
  }
  type
  ${onAddressFragment}
}`

export const onProspectFragment = gql` fragment prospectFields on Prospect {
  ...contactFields
  ${onContactFragment}
}
`;

export const onBeneficiaryFragment = gql`fragment beneficiaryFields on Beneficiary {
  customerId
  ${onContactFragment}
}`