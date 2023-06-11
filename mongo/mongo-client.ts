import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

if (!process.env.URL) dotenv.config();

export class MongoDBClient {
  private url: string;
  public db: Db | null;

  constructor() {
    this.url = process.env.URL || 'mongodb://localhost:27017';
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