import { Request, Response } from 'express';
import { List as ListType } from '../types';
import List from '../models/List';

export const getAllLists = (_: Request, res: Response) => {
  List.find({})
    .then((lists: ListType[]) => res.json(lists))
    .catch((err: Error) => res.json(err));
};

export const getOneList = (req: Request, res: Response) => {
  List.findOne({ _id: req.params.listId })
    .then((list: ListType) => res.json(list))
    .catch((err: Error) => res.json(err));
};

export const createList = (req: Request, res: Response) => {
  const newList = new List({
      title: req.body.title,
      items: req.body.items,
      total: req.body.total
  });

  List.create(newList)
    .then((list: ListType) => res.json(list))
    .catch((err: Error) => res.json(err));
};

export const updateList = (req: Request, res: Response) => {
  List.updateOne({ _id: req.params.listId }, { ...req.body })
    .then((list: ListType) => res.json(list))
    .catch((err: Error) => res.json(err));
};

export const deleteList = (req: Request, res: Response) => {
  List.deleteOne({ _id: req.params.listId })
    .then((list: ListType) => res.json(list))
    .catch((err: Error) => res.json(err));
};
