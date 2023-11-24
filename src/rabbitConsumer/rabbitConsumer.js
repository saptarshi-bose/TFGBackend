const amqplib = require("amqplib");
const fs = require("fs");
const dataFile = __dirname + "/log.json";
module.exports.consumeRabbitMQ = async () => {
  try {
    const QUEUE = "userCreated";
    const conn = await amqplib.connect(process.env.RABBITMQ_URL);

    const channel = await conn.createChannel();
    await channel.assertQueue(QUEUE);
    await channel.consume(QUEUE, async (msg) => {
      console.log("Message: ", JSON.parse(msg.content));
      let data = await loadData();
      data.push(JSON.parse(msg.content));
      console.log(data);
      await saveData(data);
      channel.ack(msg);
      console.log("done");
    });

    console.log("Read message from CONSUMER \n");
  } catch (error) {
    console.log(error);
  }
};

async function loadData() {
  console.log("dataFile is", dataFile);
  return JSON.parse(await fs.readFileSync(dataFile));
}

async function saveData(data) {
  await fs.writeFileSync(dataFile, JSON.stringify(data));
  return true;
}
