import { Country, CountryInstance, Capital } from "../db/connection_&_models";
import { Request, Response } from "express";
import { _Capital_, _Country_ } from "../interface";

export const add_a_country = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    await Country.create({
      countryName: name,
    });

    return res.send({
      success: true,
      msg: "A country has added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const get_all_countries = async (req: Request, res: Response) => {
  try {
    const all_countries = await Country.findAll({ include: Capital });

    if (!all_countries) {
      return res.sendStatus(404);
    }

    return res.send({
      success: true,
      data: all_countries,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const get_country_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const the_country = await Country.findOne({
      where: {
        id,
      },
    });

    if (!the_country) {
      return res.sendStatus(400);
    }

    return res.send({
      success: true,
      data: the_country,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const update_country_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name) {
      return res.sendStatus(400);
    }

    // Check if the country with the given ID exists
    const the_country: CountryInstance | null = await Country.findOne({
      where: { id },
    });

    if (!the_country) {
      return res.sendStatus(404);
    }

    the_country.countryName = name;
    await the_country.save();

    const updatedCountry: CountryInstance | null = await Country.findOne({
      where: {
        id,
      },
    });

    // Send the updated country in the response
    return res.send({
      success: true,
      msg: "Country has updated successfully",
      data: updatedCountry,
    });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};
export const delete_country_w_id = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    await Country.destroy({
      where: {
        id,
      },
    });

    return res.send({
      success: true,
      msg: "Country has deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
