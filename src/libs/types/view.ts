import mongoose, { ObjectId } from "mongoose";
import { ViewGroup } from "../enum/view.enum";

export interface View {
  _id: ObjectId;
  viewGroup: ViewGroup;
  memberId: ObjectId;
  viewRefId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ViewInput {
  viewGroup: ViewGroup;
  memberId: ObjectId;
  viewRefId: ObjectId;
}
