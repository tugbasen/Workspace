
import {MongoClient} from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://tugba:tugba123@cluster0.blznd.mongodb.net/auth-demo?retryWrites=true&w=majority'
    )

    return client;
}