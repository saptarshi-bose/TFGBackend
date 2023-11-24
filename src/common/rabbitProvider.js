const amqplib = require("amqplib");
const consumer = require("../rabbitConsumer/rabbitConsumer");
class Rabbit {
  constructor() {
    this.QUEUE = "userCreated";
    this.channel = null;
    this.conn = null;
  }
  async connectRabbitMQ() {
    try {
      console.log("here");
      setTimeout(async () => {
        this.conn = await amqplib.connect(process.env.RABBITMQ_URL);
        if (this.conn) console.log("RabbitMq connection created");
        this.channel = await this.conn.createChannel();
        await this.channel.assertQueue(this.QUEUE);
      }, 10000); // wait for 10sec before connecting to rabbit to ensure it is up as docker v3 does not support depends_on
    } catch (err) {
      console.log(err);
    }
  }
}
const rabbitObj = new Rabbit();
module.exports = rabbitObj;
