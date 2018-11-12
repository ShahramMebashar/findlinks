module.exports = function (req, res) {
    var ua = req.headers['user-agent'];
    var isMobile = false;
    if(ua) {
        if(/mobile/i.test(ua)) isMobile = true;
    }
    res.render(
        'home', 
        {
            title: 'Home page', 
            isMobile,
            mobileMessage:'You are using mobile we have app that you can install'
        }
    );
}