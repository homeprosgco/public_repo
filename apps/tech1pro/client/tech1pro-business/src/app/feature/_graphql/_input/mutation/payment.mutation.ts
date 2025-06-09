import {gql} from 'apollo-angular';

const createPaymentGql = gql`
mutation createPayment($paymentInput: PaymentInput!) {
  createPayment(paymentInput: $paymentInput) {
    paymentLastAdded {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
`;

const updatePaymentGql = gql`
mutation updatePayment($paymentIdInput: String!, $updatePaymentInput: PaymentInput!) {
  updatePayment(paymentIdInput: $paymentIdInput, updatePaymentInput: $updatePaymentInput) {
    paymentLastUpdated {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
`;

const removePaymentGql = gql`
mutation removePayment($paymentIdInput: String!) {
  removePayment(paymentIdInput: $paymentIdInput) {
    payments {
      id
      created
      to
      referenceId
      referenceType
      createdById
      note
    }
  }
}
`;