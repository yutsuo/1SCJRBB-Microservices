const app = require("./src/config/app");
const logger = require("./src/util/logger");
const port = 4000;

const cors = require("cors");

app.use(cors());

app.listen(port, () => logger.logger.info(`App listening on port ${port}`));
