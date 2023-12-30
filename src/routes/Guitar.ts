import { Router } from "express";
import {
  add_a_guitar,
  delete_guitar_w_id,
  get_all_guitars,
  get_guitar_w_id,
  update_guitar_w_id,
} from "../controllers/Guitar";

export default (router: Router) => {
  router.get("/guitars", get_all_guitars);
  router.post("/guitar", add_a_guitar);
  router.get("/guitar/:id", get_guitar_w_id);
  router.patch("/guitar/:id", update_guitar_w_id);
  router.delete("/guitar/:id", delete_guitar_w_id);
};
