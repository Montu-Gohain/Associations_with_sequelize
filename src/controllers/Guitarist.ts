import { Request, Response } from "express";
import { Guitar, Guitarist } from "../db/connection_&_models";

export const add_a_guitarist = async (req: Request, res: Response) => {
  try {
    const { name, id } = req.body;

    if (!name || !id) {
      return res.sendStatus(400);
    }

    await Guitarist.create({
      guitaristName: name,
      guitarId: id,
    });

    return res.send({
      success: true,
      msg: "A Guitarist has added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const get_all_guitarists = async (req: Request, res: Response) => {
  try {
    const all_guitarists = await Guitarist.findAll();
    if (!all_guitarists) {
      return res.sendStatus(400);
    }
    return res.send({
      success: true,
      data: all_guitarists,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const get_guitarist_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const the_guitarist = await Guitarist.findOne({
      where: {
        id: id,
      },
    });

    if (!the_guitarist) {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const update_guitarist_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) {
      return res.sendStatus(400);
    }

    await Guitarist.update(
      {
        guitaristName: name,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.send({
      success: true,
      msg: "Guitarist has updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const delete_guitarist_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    await Guitarist.destroy({
      where: {
        id,
      },
    });
    return res.send({
      success: true,
      msg: "The Guitarist has deleted from the database.",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
