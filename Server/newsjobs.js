const cron = require("node-cron");
const { db, http, signs } = require("./util");

class Main {
  static async getNews() {
    const recentNews = [];
    
    const  news  = (await http.get("/")).data['hits'];

      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";
      
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("news");        
        dbo.collection("recentnews").insertMany(news, function(err, res) {
          if (err) throw err;
          console.log("Number of news inserted: " + res.insertedCount);
          db.close();
        });
      }); 


  }
}
//'00 59 * * * *'  1 hour
// */10 * * * * *   10 secons
cron.schedule("00 59 * * * *", () => {
  Main.getNews();
});
