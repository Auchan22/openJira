import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid ID: ' + id });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);

    case 'GET':
      return getEntry(req, res);

    case 'DELETE':
      return deleteEntry(req, res);

    default:
      return res.status(400).json({ message: 'Invalid ID: ' + id });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  const entryUpdate = await Entry.findById(id);
  if (!entryUpdate) {
    return res
      .status(400)
      .json({ message: 'No se encontro la entry con ese id' });
  }

  const { description = entryUpdate.description, status = entryUpdate.status } =
    req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true },
    );

    res.status(200).json(updatedEntry);
    await db.disconnect();
  } catch (error: any) {
    console.error(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  const existEntry = await Entry.findById(id);

  if (!existEntry) {
    return res
      .status(400)
      .json({ message: 'No se encontro la entry con ese id' });
  }
  res.status(200).json(existEntry);

  await db.disconnect();
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  const existEntry = await Entry.findById(id);

  if (!existEntry) {
    return res
      .status(400)
      .json({ message: 'No se encontro la entry con ese id' });
  }

  try {
    const deletedEntry = await Entry.findOneAndDelete({ _id: id });

    res.status(200).json(deletedEntry);
    await db.disconnect();
  } catch (error: any) {
    console.error(error);
    await db.disconnect();
    res.status(400).json({ message: error.errors.status });

    await db.disconnect();
  }
};
