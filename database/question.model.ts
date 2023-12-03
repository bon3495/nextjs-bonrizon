import { Document, model, models, Schema } from 'mongoose';

export interface QuestionModelType extends Document {
  title: string;
  details: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createAt: Date;
}

const QuestionDatabaseSchema = new Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
  createAt: { type: Date, default: Date.now },
});

const QuestionModel = models.Question || model('Question', QuestionDatabaseSchema);

export default QuestionModel;
