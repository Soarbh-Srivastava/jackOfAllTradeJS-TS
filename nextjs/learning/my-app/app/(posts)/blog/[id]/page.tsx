export default async function BlogSlug({params,}:{params: Promise<{id:string}>}){
    const blogId = (await params).id
    return<h1>Blog item {blogId}</h1>
}
