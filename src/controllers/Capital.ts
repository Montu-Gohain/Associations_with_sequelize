import { Capital, CapitalInstance } from "../db/connection_&_models";
import { Request, Response } from "express";
import { _Capital_, _Country_ } from "../interface";

export const add_a_capital = async (req: Request, res: Response) => {
  try {
    const { name, id } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    await Capital.create({
      capitalName: name,
      countryId: id,
    });

    return res.send({
      success: true,
      msg: "A capital has added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const get_all_capitals = async (req: Request, res: Response) => {
  try {
    const all_capitals = await Capital.findAll();

    if (!all_capitals) {
      return res.sendStatus(404);
    }

    return res.send({
      success: true,
      data: all_capitals,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const get_capital_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const the_capital = await Capital.findOne({
      where: {
        id,
      },
    });

    if (!the_capital) {
      return res.sendStatus(400);
    }

    return res.send({
      success: true,
      data: the_capital,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const update_capital_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) {
      return res.sendStatus(400);
    }

    // Check if the capital with the given ID exists
    const the_capital: CapitalInstance | null = await Capital.findOne({
      where: { id },
    });

    if (!the_capital) {
      return res.sendStatus(404);
    }

    // Update the capital
    await Capital.update(
      { capitalName: name }, // New values to set
      { where: { id } } // Condition to find the capital to update
    );

    const updatedcapital: CapitalInstance | null = await Capital.findOne({
      where: {
        id,
      },
    });

    // Send the updated capital in the response
    return res.send({
      success: true,
      msg: "capital has updated successfully",
      data: updatedcapital,
    });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};
export const delete_capital_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    await Capital.destroy({
      where: {
        id,
      },
    });

    return res.send({
      success: true,
      msg: "capital has deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
