import { MongoClient, Db } from 'mongodb';

export class MongoDBClient {
  private url: string;
  public db: Db | null;

  constructor() {
    this.url = 'mongodb://127.0.0.1:27017/apiMongo';
    this.db = null;
  }

  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url)
        .then(client => {
          console.log('Connection established with Mongo');
          this.db = client.db('apiMongo');
          resolve();
        })
        .catch(err => {
          console.error('Connection with Mongo failed:', err);
          reject(err);
        });
    });
  }
}