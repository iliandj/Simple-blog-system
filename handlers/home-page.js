let ejs = require('ejs')
let fs = require('fs')
let url = require('url')
let htmlContent = fs.readFileSync('./views/pages/index.ejs', 'utf8')

let htmlRenderized = ejs.render(htmlContent, {
  filename: './views/pages/index.ejs',
  articles: [
    {
      'title': 'Teen girl with big tits murdered',
      'time': '2016-10-11',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex accusantium, nemo numquam dicta vitae odit illo, recusandae dolore in quia dolor nesciunt. Neque, eum! Similique facere cum temporibus, voluptate vero.'
    }
  ]
})

module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathname
  if (req.pathName === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(htmlRenderized)
    res.end()
  } else {
    return true
  }
}

