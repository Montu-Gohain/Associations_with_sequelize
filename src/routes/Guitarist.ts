import { Router } from "express";
import {
  add_a_guitarist,
  delete_guitarist_w_id,
  get_all_guitarists,
  get_guitarist_w_id,
  update_guitarist_w_id,
} from "../controllers/Guitarist";

export default (router: Router) => {
  router.get("/guitarists", get_all_guitarists);
  router.post("/guitarist", add_a_guitarist);
  router.get("/guitarist/:id", get_guitarist_w_id);
  router.patch("/guitarist/:id", update_guitarist_w_id);
  router.delete("/guitarist/:id", delete_guitarist_w_id);
};
