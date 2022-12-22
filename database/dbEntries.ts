import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry as EntryInterface } from '../interfaces';
import { Entry } from '../models';

export const getEntryById = async (
  id: string,
): Promise<EntryInterface | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = await Entry.findById(id).lean();
  await db.disconnect();

  return entry;
};
