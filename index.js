import express from 'express';
import views from './views/index.js';
import apis from './apis/index.js';

const app = express();
const port = 4040;

app.set("view engine", "ejs");
app.use(express.static('node_modules'));
app.use(express.static('assets'));

app.use("/", views)
app.use("/home", views)
app.use("/thegames", views);
app.use("/features", views);
app.use("/systemrequirements", views);
app.use("/topscore", views);
app.use("/games", views);


app.use("/api/v1", apis);


app.listen(port, () => {
    console.log(`server runing on ${port}`)
});

