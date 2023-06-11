import { MongoClient, Db } from 'mongodb';

export class MongoDBClient {
  private url: string;
  public db: Db | null;

  constructor(url: string) {
    this.url = url;
    this.db = null;
  }

  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url)
        .then(client => {
          console.log('Conexão com o MongoDB estabelecida');
          this.db = client.db('apiMongo');
          resolve();
        })
        .catch(err => {
          console.error('Erro ao conectar ao MongoDB:', err);
          reject(err);
        });
    });
  }
}