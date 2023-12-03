import { Document, model, models, Schema } from 'mongoose';

export interface TagModelType extends Document {
  name: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const TagDatabaseSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createdOn: { type: Date, default: Date.now },
});

const TagModel = models.Tag || model('Tag', TagDatabaseSchema);

export default TagModel;
