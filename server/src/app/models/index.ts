import { model, Schema } from "mongoose";

interface INote {
  note?: string;
  createdAt: Date;
  updatedAt: Date;
}
const noteSchema = new Schema<INote>(
  {
    note: String,
  },
  { timestamps: true }
);
export const Note = model<INote>("Note", noteSchema);
