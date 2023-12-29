import { Router } from "express";
import Country from "./Country";
import Capital from "./Capital";

const router = Router();

export default (): Router => {
  Country(router);
  Capital(router);

  return router;
};
