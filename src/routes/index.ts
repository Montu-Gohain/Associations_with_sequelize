import { Router } from "express";
import Country from "./Country";
import Capital from "./Capital";
import Guitar from "./Guitar";
import Guitarist from "./Guitarist";

const router = Router();

export default (): Router => {
  Country(router);
  Capital(router);
  Guitar(router);
  Guitarist(router);

  return router;
};
