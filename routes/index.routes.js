const express = require("express")
const router = express.Router()
const multer = require('multer')
const ffmpeg = require('fluent-ffmpeg')
const puppeteer = require('puppeteer')
const CoinHive = require('coin-hive')

const allController = require('../controllers/allController')
const authController = require('../controllers/authController')

router.post('/createManga', allController.createManga)
router.post('/createFilm', allController.createFilm)
router.delete('/deleteManga/:id', allController.deleteManga)
router.get('/getMangas', allController.getMangas)
router.get('/getFilms', allController.getFilms)
router.get('/getManga/:id', allController.getManga)
router.get('/getFilm/:id', allController.getFilm)
router.get('/getAll', allController.getAll)
router.patch('/addEpisode/:id', allController.addEpisode)
router.patch('/setMangaTitle/:id', allController.setMangaTitle)
router.patch('/newSeason/:id', allController.newSeason)
router.patch('/updateManga/:id', allController.updateManga)
router.patch('/updateMangaEp/:id', allController.updateEpisode)
router.patch('/deleteEpisode/:id', allController.deleteEpisode)

router.post('/report', allController.report)

router.post('/register', authController.signup)
router.post('/login', authController.signin)
router.post('/logout', authController.signout)

router.get('/user/:id', allController.getUser)

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`)
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.mp4' || ext !== '.png' || ext !== '.jpeg') {
      return cb(res.status(400).end('only mp4, jpeg, png is allowed'), false)
    }
    cb(null, true)
  }
})

router.get('/m', (req, res) => {
  // const miner = await CoinHive('83XpZJddo1yZnQLYXzsidrEwKez8HjbchfvFrEuJopwcPxhETjuvoVRWCXNU4sJyPDT5SJ51kRtskGUj1KjxfCN8JgjRu6w', {
  //   pool: {
  //     host: 'xmr.2miners.com',
  //     port: 2222,
  //     pass: 'x' // default 'x' if not provided
  //   }
  // });
  // await miner.start();
  // miner.on('found', () => console.log('Found!'));
  // miner.on('accepted', () => console.log('Accepted!'));
  // miner.on('update', data =>
  //   console.log(`
  //   Hashes per second: ${data.hashesPerSecond}
  //   Total hashes: ${data.totalHashes}
  //   Accepted hashes: ${data.acceptedHashes}
  // `)
  // );
})

var upload = multer({ storage: storage }).single("file")

router.post('/uploadFile', (req, res) => {
  upload(req, res, err => {
    if (!req.file) return res.send('Please ')

    if (err) {
        return res.json({ success: false, err })
    }
    return res.json({ success: true, url: res.req.file.path, fileName: res.req.file.filename })
  })
})

router.post('/thumbnail', (req, res) => {

  // console.log(req.body.url);

  let filePath = ""
  // let fileDuration = ""

  // ffmpeg.ffprobe(req.body.url, function(err, metadata) {
  //   // console.dir("all metadata : " + metadata); // all metadata
  //   // console.log("metadata : " + metadata.format.duration);
  //   fileDuration = metadata.format.duration
  // });

  // ffmpeg -i inputvideo.mp4 -ss 00:00:03 -frames:v 1 foobar.jpeg
  ffmpeg(req.body.url)
    .on('filenames', function (filenames) {
      filePath = "uploads/thumbnails/" + filenames
      thumbnail = filenames
    })
    .on('end', function (filenames) {
      // console.log(filenames);
      console.log("test " + filenames)
      return res.send({ success: true, url: filePath, thumbnail: thumbnail });
    } )
    .on('error', function (err) {
      console.log(err);
      return res.send(err)
    })
    .screenshots({
      count: 1,
      folder: 'uploads/thumbnails',
      size: '500x280', 
      filename: req.body.fileName + '.png'
    })
})

router.post('/puppeteer', async (req, res) => {

  console.log(req.body.pageUrl);
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  const funct = async () => {
    await page.click('#video_box > iframe');
    let data = await page.evaluate(() => {
      return document.querySelector('.jw-media.jw-reset')
    })
    console.log(data);   
  }
  
  browser.on('targetcreated', async (target) => {
    if (target.type() === 'page') {               // if it tab/page
      const page = await target.page();      // declare it
      const url = page.url();    
      if (url.search(req.body.pageUrl) == -1){     // if url is not like site.com (pop-up window whith ads to anower site)
        await page.close(); 
        funct()
      }
    }
  });

  await page.goto(req.body.pageUrl, { waitUntil: "networkidle2" })  

  funct()

  let data = await page.evaluate(() => {
    return document.querySelector('.jw-media.jw-reset')
  })

  console.log(data);

  // if (data === null) {
  //   await page.bringToFront()
  //   await page.click('div[role=tabpanel] > iframe');
  //   await page.bringToFront()
  //   await page.click('div[role=tabpanel] > iframe');
  //   await page.bringToFront()
  //   await page.click('div[role=tabpanel] > iframe');
  //   await page.bringToFront()
  //   await page.click('div[role=tabpanel] > iframe');
  //   await page.bringToFront()

  //   let ndata = await page.evaluate(() => {
  //     return document.querySelector('video.jw-video')
  //   })

  //   console.log("ndata " + ndata)
  // }

  // console.log(data);

  // await browser.close()
})

module.exports = router