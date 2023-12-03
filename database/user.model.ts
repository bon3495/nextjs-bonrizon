import { Document, model, models, Schema } from 'mongoose';

// import { UserInfoType } from '@/containers/authentication/types';

export interface UserModelType extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  birthday?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joined: Date;
}

const UserDatabaseSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String },
  location: { type: String },
  birthday: { type: String },
  gender: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  joined: { type: Date, default: Date.now },
});

const UserModel = models.User || model('User', UserDatabaseSchema);

export default UserModel;
