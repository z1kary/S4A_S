const MangaModel = require('../models/mangaModel')
const ObjectID = require('mongoose').Types.ObjectId
const UserModel = require('../models/userModel')
const FilmModel = require('../models/filmModel')
const ReportModel = require('../models/reportModel')

module.exports.getAll = async (req, res) => {
  const mangas = await MangaModel.find()
  // const films = await FilmsModel.find()
  res.status(200).json({ mangas })
}

module.exports.getMangas = async (req, res) => {
  const mangas = await MangaModel.find()
  return res.status(200).json({ success: true, mangas })
}

module.exports.getFilms = async (req, res) => {
  const films = await FilmModel.find()
  return res.status(200).json({ success: true, films })
}

module.exports.getManga = async (req, res) => {
  const manga = await MangaModel.findById(req.params.id)
  res.status(200).json(manga)
}

module.exports.getFilm = async (req, res) => {
  const film = await FilmModel.findById(req.params.id)
  res.status(200).json(film)
}

module.exports.createManga = async (req, res) => {
  try {
    const manga = await MangaModel.create(req.body)
    res.status(200).json(manga)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

module.exports.createFilm = async (req, res) => {
  try {
    const film = await FilmModel.create(req.body)
    res.status(200).json(film)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

module.exports.deleteManga = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Unknown ID")

  try {
    await MangaModel.deleteOne({ _id: req.params.id }).exec()
    res.status(200)
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err })
  }

}

module.exports.addEpisode = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Unknown ID")

  try{
    if (req.body.season === "s1") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.s1": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s2") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.s2": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s3") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.s3": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s4") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.s4": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s5") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.s5": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s6") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.s6": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s7") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.s7": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kai") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.kai": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS1") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.kaiS1": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS2") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.kaiS2": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS3") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.kaiS3": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS4") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.kaiS4": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS5") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.kaiS5": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS6") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { "seasonsData.kaiS6": req.body.data }},
        { new: true },
        (err, docs) => {
          if (!err) return res.send(docs)
          else return res.status(500).send(err)
        }
        ).clone().catch(function(err){ console.log(err)})
    }

  } catch(err) {
    console.log(err)
  }

}

module.exports.setMangaTitle = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Unknown ID")

  try {
    await MangaModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { title: req.body.title }},
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) return res.status(200).json({ success: true, message: docs })
        else return res.status(400).json({ success: false, message: err })
      }
    ).clone().catch(function(err){ console.log(err)})
  } catch (err) {
    return res.status(500).json({ success: false, message: err })
  }
}

module.exports.newSeason = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Unknown ID")

  // console.log(req.body);
  try {
    await MangaModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { seasons: req.body.data, seasonsData: req.body.seasonsData }},
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) return res.status(200).json({ success: true, message: docs })
        else return res.status(400).json({ success: false, message: err })
      }
    ).clone().catch(function(err){ console.log(err)})
  } catch(err) {
    return res.status(500).json({ success: false, message: err })
  }
}

module.exports.updateManga = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Unknown ID")

  try {
    
    await MangaModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { title: req.body.title, description: req.body.description, picture: req.body.picture, format: req.body.format }},
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) return res.status(200).json({ success: true, message: docs })
        else return console.log(err);
        // res.status(400).json({ success: false, message: err })
      }
    ).clone().catch(function(err){ console.log(err)})
      
  } catch (err) {
    console.log(err)
  }
}

module.exports.updateEpisode = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Unknown ID")

  try {
    if (req.body.season === "s1") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.s1.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s2") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.s2.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s3") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.s3.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s4") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.s4.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s5") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.s5.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s6") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.s6.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s7") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.s7.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kai") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.kai.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS1") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.kaiS1.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS2") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.kaiS2.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS3") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.kaiS3.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS4") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.kaiS4.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS5") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.kaiS5.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS6") {
      await MangaModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { "seasonsData.kaiS6.$[el]": req.body.data }},
        { new: true, upsert: true, 
          arrayFilters: [{ "el.epNum": req.body.ep }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, message: docs })
          else return res.status(400).json({ success: false, message: err })
        }
        ).clone().catch(function(err){ console.log(err)})
    }
  } catch(err) {
    console.log(err)
    return res.status(500).json({ success: false, message: err })
  }
}

module.exports.deleteEpisode = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("Unknown ID")
  
  try{
    if (req.body.season === "s1") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.s1": { epNum: req.body.epNum } }},
        { new: true, multi: true,
          // arrayFilters: [{ "el.epNum": req.body.epNum }]
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s2") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.s2": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s3") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.s3": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s4") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.s4": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s5") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.s5": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s6") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.s6": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "s7") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.s7": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kai") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.kai": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS1") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.kaiS1": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS2") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.kaiS2": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS3") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.kaiS3": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS4") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.kaiS4": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS5") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.kaiS5": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    } else if (req.body.season === "kaiS6") {
      await MangaModel.findOneAndUpdate({ _id: req.params.id },
        { $pull: { "seasonsData.kaiS6": { epNum: req.body.epNum } }},
        { new: true, multi: true,
        },
        (err, docs) => {
          if (!err) return res.status(200).json({ success: true, docs, season: req.body.season, epNum: req.body.epNum })
          else return res.status(400).json({ success: false, message: err })
        }).clone().catch(function(err){ console.log(err)})
    }
  } catch(err) {
    console.log(err)
    return res.status(500).json({ success: false, message: err })
  }
}

module.exports.getUser = (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("Unknown ID")
  } else { 
    UserModel.findById(req.params.id, function (err, docs) {
      if (!err) res.send(docs);
      else console.log('User not found : ' + req.params.id)
    }).select('-password')
  }
}

module.exports.report = async (req, res) => {
  try {
    const report = await ReportModel.create(req.body)
    res.status(200).json(report)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}