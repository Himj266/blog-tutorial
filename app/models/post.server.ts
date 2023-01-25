interface Post {
    slug: string;
    title: string;
}

export async function getPosts():Promise<Post[]> {
    return [{slug:'a',title:'a post'}]
    
}