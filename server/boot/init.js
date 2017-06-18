module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate(['shebang', 'recall'], function(err) {
    if (err) throw err;
      console.log('Models created');
    });
};
