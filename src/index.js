const Fs = require("fs");
const CsvReadableStream = require("csv-reader");
const { InfluxDB, Point } = require("@influxdata/influxdb-client");

// Read the README.md file
const url = "https://us-east-1-1.aws.cloud2.influxdata.com";
const org = "";
const token = '';
const bucket = "pos";



// Instance Client
const client = new InfluxDB({ url, token });
let writeClient = client.getWriteApi(org, bucket, "ms");




// Write data into InfluxDb
function writePoint({ year, city, homeTeam, outTeam }) {
  const time = new Date(`${year}-06-05 17:30:14.000`);
  let point = new Point("worldcup6")
    .timestamp(time.getTime())
    .intField("year", parseInt(year))
    .stringField("city", city)
    .stringField("homeTeam", homeTeam)
    .stringField("outTeam", outTeam);

  writeClient.writePoint(point);
  
}




async function readDataSet(fileName) {
  return new Promise((resolve, reject) => {
    var list = [];
    let inputStream = Fs.createReadStream(
      `${__dirname}/db/${fileName}`,
      "utf8"
    );
    inputStream
      .pipe(new CsvReadableStream())
      .on("data", function (row) {
        list.push({
          year: row[0],
          city: row[4],
          homeTeam: row[5],
          outTeam: row[8],
        });
      })
      .on("end", function () {
        return resolve(list);
      });
  });
}




async function startScript() {
  try {
		const list = await readDataSet("data.csv");
		// remove headers
		list.shift();

		for (const game of list) {
			writePoint(game);
		}
		
		const result = await writeClient.flush()
		console.log("Success sending data to InfluxDB");
	} catch (error) {
		console.log("Someting went wrong", error)
	}
}


startScript();