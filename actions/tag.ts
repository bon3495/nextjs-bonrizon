'use server';

import { FilterQuery } from 'mongoose';

import { GetTagFromDbSchema } from '@/containers/tags/schema';
import {
  GetQuestionsByTagIdParamsType,
  TagItemType,
  TagsListType,
  TagsParamsFiltersType,
  TopInteractedTagsType,
} from '@/containers/tags/types';
import QuestionModel from '@/database/question.model';
import TagModel from '@/database/tag.model';
import UserModel from '@/database/user.model';
import { connectToDatabase } from '@/lib/mongoose';

export async function getTopInteractedTags(params: TopInteractedTagsType) {
  try {
    connectToDatabase();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { userId, limit } = params;

    const user = await UserModel.findById(userId);

    if (!user) throw new Error('User not found!');

    // TODO: Find interactions for the user and group by tags...
    // Interaction...

    return [
      {
        _id: '1',
        name: 'Typescript',
        description:
          'TypeScript is a typed superset of JavaScript that transpiles to plain JavaScript. It adds optional types to JavaScript. This tag is for questions specific to TypeScript. It is not used for general JavaScript questions.',
      },
      {
        _id: '2',
        name: 'Javascript',
        description:
          'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc.',
      },
      // {
      //   _id: '3',
      //   name: 'Next.js',
      //   description:
      //     'Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.',
      // },
    ];
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getTopInteractedTags', error);
    throw error;
  }
}

export async function getTagsByFilters(params: Partial<TagsParamsFiltersType>) {
  try {
    connectToDatabase();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { currentPage, pageSize, searchQuery, filter } = params;

    const tagsList = (await TagModel.find({}).populate({
      path: 'questions',
      model: QuestionModel,
    })) as TagItemType[];

    return tagsList;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getTagsByFilters', error);
    throw error;
  }
}

export async function getQuestionsByTagId(params: GetQuestionsByTagIdParamsType) {
  try {
    connectToDatabase();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, currentPage, pageSize, searchQuery } = params;

    const tagFilter: FilterQuery<TagsListType> = { _id: id };

    const tag = await TagModel.findOne(tagFilter).populate({
      path: 'questions',
      model: QuestionModel,
      match: searchQuery ? { title: { $regex: searchQuery, $options: 'i' } } : {},
      options: {
        sort: { createdAt: -1 },
      },
      populate: [
        {
          path: 'tags',
          model: TagModel,
          select: '_id name',
        },
        {
          path: 'author',
          model: UserModel,
          select: '_id clerkId name picture',
        },
      ],
    });

    if (!tag) {
      throw new Error('Tag not found');
    }

    const tagParsed = GetTagFromDbSchema.parse(tag);
    const { questions } = tagParsed;

    return { title: tagParsed.name, questions };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('actions - getQuestionsByTagId', error);
    throw error;
  }
}
