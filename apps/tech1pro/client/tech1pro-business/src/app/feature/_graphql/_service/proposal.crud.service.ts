import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreateProposalGQL, ProposalByIdGQL, ProposalInput, ProposalsGQL, RemoveProposalGQL, UpdateProposalGQL } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ProposalCrudService {

  constructor(
    private createProposalGQL: CreateProposalGQL,
    private updateProposalGQL: UpdateProposalGQL,
    private removeProposalGQL: RemoveProposalGQL,
    private proposalsGQL: ProposalsGQL,
    private proposalByIdGQL: ProposalByIdGQL
  ) { }

  createProposal$(proposalInput: ProposalInput) {
    return this.createProposalGQL.mutate( {proposalInput }).pipe(
      map( res => res.data?.createProposal.proposalLastAdded)
    );
  }

  updateProposal$(proposalIdInput: string, updateProposalInput: ProposalInput) {
    return this.updateProposalGQL.mutate({ proposalIdInput, updateProposalInput }).pipe(
      map( res => res.data?.updateProposal.proposalLastUpdated)
    );
  }

  removeProposallead$(proposalIdInput: string) {
    return this.removeProposalGQL.mutate({ proposalIdInput }).pipe(
      map( res => res.data?.removeProposal.proposals)
    );
  }

  fetchProposals$() {
    return this.proposalsGQL.fetch().pipe(
      map( res => res.data.account.proposals)
    );
  }

  fetcheProposalById$(proposalId: string) {
    return this.proposalByIdGQL.fetch( {proposalId}).pipe(
      map( res => res.data.account.proposalById)
    );
  }

}
