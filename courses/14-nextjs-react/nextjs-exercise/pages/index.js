

import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props) {

    return (
        <Fragment>
            <Head>
                <title>React Meetup</title>
                <meta name='description' content='Browse a huge list of higly active React meetups!' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an api

    const client = await MongoClient.connect(
        'mongodb+srv://tugba:tugba123@cluster0.blznd.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
  
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage;