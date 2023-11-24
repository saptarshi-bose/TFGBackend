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
      this.conn = await amqplib.connect(process.env.RABBITMQ_URL);
      if (this.conn) console.log("RabbitMq connection created");
      this.channel = await this.conn.createChannel();
      await this.channel.assertQueue(this.QUEUE);
    } catch (err) {
      console.log(err);
    }
  }
}
const rabbitObj = new Rabbit();
module.exports = rabbitObj;
