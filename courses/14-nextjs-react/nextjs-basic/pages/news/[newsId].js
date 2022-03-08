// our-domain/something-else

import { useRouter } from 'next/router';

function DetailPage(){
    const router = useRouter();

    const newsId = router.query.newsId;

    // send a equest to the backend api
    // to fecth the news item with newsId

    return <h1>The Detail Page</h1>
}

export default DetailPage;