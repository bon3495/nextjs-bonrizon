import { model, models, Schema } from 'mongoose';

const InteractionDatabaseSchema = new Schema({
  action: { type: String, require: true },
  user: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  question: { type: Schema.Types.ObjectId, ref: 'Question' },
  answer: { type: Schema.Types.ObjectId, ref: 'Answer' },
  tags: { type: Schema.Types.ObjectId, ref: 'Tag' },
  createAt: { type: Date, default: Date.now },
});

const InteractionModel = models.Interaction || model('Interaction', InteractionDatabaseSchema);

export default InteractionModel;
