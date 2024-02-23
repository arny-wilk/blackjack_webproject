// blog.ts - Posts route module

import { Router } from "https://deno.land/x/opine@2.3.4/mod.ts";

const router = Router();

// Home page route
router.get("/", function(req, res) {
  res.send("hello");
});

// About page route
router.get("/", function(req, res) {
  res.send("About me.");
});

export default router;

