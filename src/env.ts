const env = {
    appwrite:{
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!),
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!),
        apikey: String(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!),
    }
}

export default env;