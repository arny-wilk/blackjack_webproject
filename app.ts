import { opine, serveStatic } from "https://deno.land/x/opine@2.3.4/mod.ts";

const app = opine();

app.get("/", function (req, res) {
  res.redirect("/gameboard");
});

app.use("/gameboard", serveStatic("public"));

app.listen(3000);
console.log("Opine started on port 3000");

