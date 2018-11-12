module.exports = function (req, res) {
    res.render( 'home', { layout: 'admin', title: 'Admin Home page'} );
}