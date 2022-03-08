
import Head from 'next/head';

import { getPostData, getPostsFiles } from "../../lib/posts-util";
import PostContent from "../../components/posts/post-detail/post-content";
import { Fragment } from 'react';

function PostDetailPage(props){
    return(
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name='description' content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </Fragment>
    )
}

export function getStaticProps(context){
    const {params} = context
    const {slug} = params;

    const postData = getPostData(slug)

    return{
        props:{
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths(){
    const postFilenames = getPostsFiles()

    const slug = postFilenames.map(fileName =>  fileName.replace(/\.md$/, ''))

    return{
        paths: slug.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}

export default PostDetailPage;