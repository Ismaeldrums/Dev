
const { db, http, signs } = require("../util");

it('test news api', async done => {
    const  news  = (await http.get("/")).data['hits'];
  
    expect(news.length).toBe(20)
    done()
  })