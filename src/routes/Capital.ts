import { Router } from "express";
import {
  add_a_capital,
  delete_capital_w_id,
  get_all_capitals,
  get_capital_w_id,
  update_capital_w_id,
} from "../controllers/Capital";

export default (router: Router) => {
  router.get("/capitals", get_all_capitals);
  router.get("/capital/:id", get_capital_w_id);
  router.post("/capital", add_a_capital);
  router.patch("/capital/:id", update_capital_w_id);
  router.delete("/capital/:id", delete_capital_w_id);
};
