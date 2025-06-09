import { Proposal, ProposalInput } from "@graphql-schema/";
import { FirestoreService } from "../firestore.service";
export declare class ProposalService {
    #private;
    private readonly firestoreSvc;
    readonly collectionName = "proposals";
    constructor(firestoreSvc: FirestoreService);
    addProposal(accountId: string, proposalInput: ProposalInput): Promise<Proposal>;
    getLastAddedProposal(accountId: string): Promise<Proposal>;
    getLastUpdatedProposal(accountId: string): Promise<Proposal>;
    getProposals(accountId: string): Promise<Proposal[]>;
    getProposalById(accountId: string, proposalId: string): Promise<Proposal>;
    getProposalsCreatedBetween(accountId: string, afterISODateString: string, beforeISODateString: string | undefined): Promise<Proposal[]>;
    getProposalsWhereEqual(accountId: string, whereProperty: string, whereValue: any): Promise<Proposal[]>;
    updateProposal(accountId: string, proposalId: string, proposalInput: ProposalInput): Promise<Proposal>;
    deleteProposal(accountId: string, proposalId: string): Promise<FirebaseFirestore.WriteResult>;
}
