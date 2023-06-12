import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

if (!process.env.URL) dotenv.config();

export class MongoDBClient {
  private url: string;
  public db: Db | null;

  constructor() {
    this.url = process.env.URL || 'mongodb://127.0.0.1:27017/apiMongo';
    this.db = null;
  }

  public async connect(): Promise<void> {
    try {
      const client = await MongoClient.connect(this.url);
      console.log('Connection established with Mongo');
      this.db = client.db('apiMongo');
    } catch (error) {
      console.error('Connection with Mongo failed:', error);
      throw error;
    }
  }
}