import { MutationUpdateAnnotationArgs } from '../../../graphql/server/resolvers-types';
import type { GraphQLContext } from '../context';

export const updateAnnotation = (
  _parent: unknown,
  args: Partial<MutationUpdateAnnotationArgs>,
  context: GraphQLContext,
) => {
  return context.prisma.annotation.update({
    where: {
      id: args.input?.id ?? -1,
    },
    data: {
      latitude: args.input?.latitude ?? 0.0,
      longitude: args.input?.longitude ?? 0.0,
      symbol: args.input?.symbol ?? '',
      note: args.input?.note ?? '',
    },
  });
}