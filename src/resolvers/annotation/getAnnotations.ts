import { QueryGetAnnotationsArgs } from '../../../graphql/server/resolvers-types';
import type { GraphQLContext } from "@/resolvers/context";

export const getAnnotations = async (
  _parent: unknown,
  args: QueryGetAnnotationsArgs,
  context: GraphQLContext,
) => {
  const where = args.input?.filter
    ? {
        OR: [{ symbol: { contains: args.input.filter } }, { note: { contains: args.input.filter } }],
      }
    : {};

  const totalCount = await context.prisma.annotation.count({ where });
  const annotations = await context.prisma.annotation.findMany({
    where,
    skip: args.input?.skip ?? 0,
    take: args.input?.take ?? 10,
    //orderBy: args.input?.orderBy ? args.input.orderBy : undefined,
  });

  return {
    count: totalCount,
    annotations,
  };
};
