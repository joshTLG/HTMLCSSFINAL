const express = require('express')
const Article = require('../models/article')
const router = express.Router()
const methodOverride = require('method-override')


router.get("/", async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/articles.ejs', { articles: articles })
})

router.get('/new-article', (req,res) => {
  res.render('articles/newArticle.ejs', {article: new Article()})
})

router.get('/edit/:id', async (req,res) => {
  const article = await Article.findById(req.params.id)
  res.render('articles/edit.ejs', {article: article})
})

router.get('/:slug', async (req,res) => {
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/dashboardclea')
  res.render('articles/show.ejs', { article: article})

})

router.post('/', async (req, res, next) => {
  req.article = new Article()
  next()
}, saveArticle('new'))
  

router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id)
  next()
}, saveArticle('edit'))

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/articles')

})

function saveArticle (path) {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    try{
    article = await article.save()
    res.redirect(`/articles/${article.slug}`)
  } catch(e) {
    res.render(`articles/${path}`, { article:article } )
        }
  }
}

//Export router to be used in main server 
module.exports = router