import { gql } from 'apollo-angular';

const createProposalGql = gql`
mutation createProposal($proposalInput: ProposalInput!) {
  createProposal(proposalInput: $proposalInput) {
    proposalLastAdded {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
`;

const updateProposalGql = gql`
mutation updateProposal($proposalIdInput: String!, $updateProposalInput: ProposalInput!) {
  updateProposal(proposalIdInput: $proposalIdInput, updateProposalInput: $updateProposalInput) {
    proposalLastUpdated {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
`;

const removeProposalGql = gql`
mutation removeProposal($proposalIdInput: String!) {
  removeProposal(proposalIdInput: $proposalIdInput) {
    proposals {
      id
      prospectId
      status
      category
      requestedWorkScope
      definedWorkScope
      createdById
      address {
        streetAddress
        city
        state
        zipcode
      }
      addressId
      jobLeadId
      imageURLs
      fileURLs
      referenceId
      created
      lineWorkServices {
        quantity
        workService {
          category
          costGuides
          created
          description
          id
          name
          salePrice
          timeToComplete
          lineItems {
            quantity
            item {
              category
              description
              imageURL
              websiteReferences
              name
              salePrice
              purchasePrice
              sku
              modelNumber
              brand
              make
              installLinks
              created
            }
          }
        }
      }
    }
  }
}
`;