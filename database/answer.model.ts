import { model, models, Schema } from 'mongoose';

const AnswerDatabaseSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  answerDetail: { type: String, required: true },
  question: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  upvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  createAt: { type: Date, default: Date.now },
});

const AnswerModel = models.Answer || model('Answer', AnswerDatabaseSchema);

export default AnswerModel;
