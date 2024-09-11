import { MutationDeleteAnnotationArgs } from '../../../graphql/server/resolvers-types';
import type { GraphQLContext } from '../context';

export const deleteAnnotation = (
  _parent: unknown,
  args: Partial<MutationDeleteAnnotationArgs>,
  context: GraphQLContext,
) => {
  return context.prisma.annotation.delete({
    where: {
      id: args.id,
    },
  });
};
