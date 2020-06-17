export function DataHandler(setItems) {
  let data = require("./sampledata.json");
  let jobdata = [];

  for (let i = 0; i < data.jobs.length; i++) {
    let username = data.jobs[i].user;
    let startdate = data.jobs[i].startdate;
    let startmonth = data.jobs[i].startmonth;
    let startyear = data.jobs[i].startyear;
    let enddate = data.jobs[i].enddate;
    let endmonth = data.jobs[i].endmonth;
    let endyear = data.jobs[i].endyear;

    let startdato = new Date(startyear, startmonth, startdate);
    let slutdato = new Date(endyear, endmonth, enddate);

    let job = { username: username, start: startdato, end: slutdato };
    jobdata.push(job);
  }
  setItems(jobdata);
}
