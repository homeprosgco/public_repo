import {gql} from 'apollo-angular';

const paymentsGql = gql`
query payments {
  account {
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

const paymentByIdGql = gql`
query paymentById($paymentId: String!) {
  account {
    paymentById(paymentId: $paymentId) {
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