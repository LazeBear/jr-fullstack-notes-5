require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
// const cors = require('./middleware/cors');
const cors = require('cors');
const morgan = require('morgan');

const router = require('./routes');
const logger = require('./utils/logger');
const swaggerDoc = require('./utils/swagger');

const PORT = process.env.PORT || 3000;
const app = express();

// function cors({options}) {
//   return (req, res, next) => { };
// }

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'dev' ? 'tiny' : 'combined'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(router);

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
