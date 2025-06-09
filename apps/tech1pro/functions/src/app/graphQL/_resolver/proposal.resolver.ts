import { Proposal } from "@graphql-schema/*";
import { Resolver, ResolveField, Parent, Context } from "@nestjs/graphql";
import { ServerContext } from "../_interface/server-context.interface";
import { ActivityService } from "../_service/firebase/admin/firestore/activity.service";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";
import { CommentService } from "../_service/firebase/admin/firestore/comment.service";
import { NoteService } from "../_service/firebase/admin/firestore/note.service";
import { Tech1ProAccountsPath } from "../_service/firebase/util/util";

@Resolver('Proposal')
export class ProposalResolver {

  #collectionPath(accountId: string, proposalId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/proposals/${proposalId}`
  }

  constructor(
    private readonly addressSvc: AddressService,
    private readonly activitySvc: ActivityService,
    private readonly commentSvc: CommentService,
    private readonly noteSvc: NoteService
  ) { }

  @ResolveField('address')
  async address(@Parent() proposal: Proposal, @Context() ctx: ServerContext) {
    const { addressId } = proposal;
    return this.addressSvc.getAddress(ctx.accountId, (addressId as string));
  }

  @ResolveField('activities')
  async activities(@Parent() proposal: Proposal, @Context() ctx: ServerContext) {
    const { id } = proposal;
    return this.activitySvc.getActivities(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

  @ResolveField('comments')
  async comments(@Parent() proposal: Proposal, @Context() ctx: ServerContext) {
    const { id } = proposal;
    return this.commentSvc.getComments(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

  @ResolveField('notes')
  async notes(@Parent() proposal: Proposal, @Context() ctx: ServerContext) {
    const { id } = proposal;
    return this.noteSvc.getNotes(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

}