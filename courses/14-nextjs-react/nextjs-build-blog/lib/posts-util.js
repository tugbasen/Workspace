
import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';
//cwd: current working directory

export function getPostsFiles() {
    const postsDirectory = path.join(process.cwd(), 'posts')
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier){
    const postsDirectory = path.join(process.cwd(), 'posts')
    const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)

    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles()

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1 )

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)

    return featuredPosts;
}