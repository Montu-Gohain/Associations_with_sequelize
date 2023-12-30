import { Request, Response } from "express";
import { Guitar, Guitarist } from "../db/connection_&_models";

export const add_a_guitar = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    await Guitar.create({
      brandName: name,
    });

    return res.send({
      success: true,
      msg: "A Guitar has added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const get_all_guitars = async (req: Request, res: Response) => {
  try {
    const all_guitars = await Guitar.findAll({ include: Guitarist });
    if (!all_guitars) {
      return res.sendStatus(400);
    }
    return res.send({
      success: true,
      data: all_guitars,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const get_guitar_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const the_guitar = await Guitar.findOne({
      where: {
        id: id,
      },
      include: Guitarist,
    });

    if (!the_guitar) {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const update_guitar_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) {
      return res.sendStatus(400);
    }

    await Guitar.update(
      {
        brandName: name,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.send({
      success: true,
      msg: "This Guitar has been updated",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const delete_guitar_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    await Guitar.destroy({
      where: {
        id,
      },
    });

    return res.send({
      success: true,
      msg: "This Guitar has been deleted successfully from database.",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
