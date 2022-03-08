
import MongoClient from 'mongodb';

async function handler(req, res){
    const eventId = req.query.eventId;

    const client = await MongoClient.close(
      'mongodb+srv://tugba:qCAaLRgK7Gj8D9o6@cluster0.xlyxq.mongodb.net/events?retryWrites=true&w=majority', 
      {useNewUrlParser: true}
    )

    if (req.method === 'POST') {
        const { email, name, text } = req.body;
    
        if (
          !email.includes('@') ||
          !name ||
          name.trim() === '' ||
          !text ||
          text.trim() === ''
        ) {
          res.status(422).json({ message: 'Invalid input.' });
          client.close();
          return;
        }
    
        const newComment = {
          email,
          name,
          text,
          eventId,
        };

        const db = client.db()

        const result = await db.collection('comments').insertOne(newComment)

        console.log(result)

        newComment.id = result.insertedId;

        res.status(201).json({message: 'Added comment', comment: newComment})
    }

    if(req.method === 'GET'){
        const db = client.db()

        const documents = await db
            .collection('comments')
            .find()
            .sort({_id: -1})
            .toArray()

        res.status(200).json({comments: documents})
    }

    client.close()
}

export default handler;