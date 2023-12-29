import { Router } from "express";
import {
  add_a_country,
  delete_country_w_id,
  get_all_countries,
  get_country_w_id,
  update_country_w_id,
} from "../controllers/Country";

export default (router: Router) => {
  router.get("/countries", get_all_countries);
  router.get("/country/:id", get_country_w_id);
  router.post("/country", add_a_country);
  router.patch("/country/:id", update_country_w_id);
  router.delete("/country/:id", delete_country_w_id);
};
