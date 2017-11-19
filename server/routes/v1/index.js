const routes = (app) => {
  /*
	 *GET API index route
	 */
  app.route('/api/v1')
	  .get((req, res) => res.send({ title: 'Welcome to Events Manager' }));

  app.route('*')
      .get((req, res) => res.status(404).send({status: 'Error', message: 'Not found'}));
};

export default routes;
