


// phần này là function handler (controllers)
class NewsController {

    // trang chủ của news
    // phương thức [GET] /news
    index(req, res){
        res.render('news')
    }
    // phương thức show 
    show(req, res){
        res.send('NEWS DETAILS !!!!')
    }
}

module.exports =new NewsController(); // export ra ngoài để thằng khác import 