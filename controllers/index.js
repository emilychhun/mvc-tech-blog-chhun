let router = require('express').Router();

let apiRoutes = require('./api');
let homeRoutes = require('./home-routes.js');
let dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;