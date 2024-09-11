import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from "next";
import { createSchema, createYoga } from 'graphql-yoga'
import { deleteAnnotation } from "@/resolvers/annotation/deleteAnnotation";
import { getAnnotations } from "@/resolvers/annotation/getAnnotations";
import { getAnnotation } from "@/resolvers/annotation/getAnnotation";
import { createAnnotation } from "@/resolvers/annotation/createAnnotation";
import { updateAnnotation } from "@/resolvers/annotation/updateAnnotation";
import { createContext } from "@/resolvers/context";

const typeDefs = fs.readFileSync("./graphql/schema.graphql", 'utf8');


const {handleRequest} = createYoga<{
    req: NextApiRequest
    res: NextApiResponse
}>({
    // @ts-ignore
    schema: createSchema({
        typeDefs: typeDefs,
        resolvers: {
            Query: {
                getAnnotations,
                getAnnotation,
            },
            Mutation: {
                createAnnotation,
                updateAnnotation,
                deleteAnnotation,
            },
        }
    }),

    // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
    graphqlEndpoint: '/api/graphql',

    // Yoga needs to know how to create a valid Next response
    fetchAPI: {Response},

    context: createContext
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }