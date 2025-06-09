import { Estimate } from "@graphql-schema/*";
import { Resolver, ResolveField, Parent, Context } from "@nestjs/graphql";
import { ServerContext } from "../_interface/server-context.interface";
import { ActivityService } from "../_service/firebase/admin/firestore/activity.service";
import { AddressService } from "../_service/firebase/admin/firestore/address.service";
import { CommentService } from "../_service/firebase/admin/firestore/comment.service";
import { NoteService } from "../_service/firebase/admin/firestore/note.service";
import { Tech1ProAccountsPath } from "../_service/firebase/util/util";

@Resolver('Estimate')
export class EstimateResolver {

  #collectionPath(accountId: string, estimateId: string) {
    return `${Tech1ProAccountsPath}/${accountId}/estimates/${estimateId}`
  }

  constructor(
    private readonly addressSvc: AddressService,
    private readonly activitySvc: ActivityService,
    private readonly commentSvc: CommentService,
    private readonly noteSvc: NoteService
  ) { }

  @ResolveField('address')
  async address(@Parent() estimate: Estimate, @Context() ctx: ServerContext) {
    const { addressId } = estimate;
    return this.addressSvc.getAddress(ctx.accountId, (addressId as string));
  }

  @ResolveField('activities')
  async activities(@Parent() estimate: Estimate, @Context() ctx: ServerContext) {
    const { id } = estimate;
    return this.activitySvc.getActivities(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

  @ResolveField('comments')
  async comments(@Parent() estimate: Estimate, @Context() ctx: ServerContext) {
    const { id } = estimate;
    return this.commentSvc.getComments(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

  @ResolveField('notes')
  async notes(@Parent() estimate: Estimate, @Context() ctx: ServerContext) {
    const { id } = estimate;
    return this.noteSvc.getNotes(`${this.#collectionPath(ctx.accountId, (id as string))}`);
  }

}