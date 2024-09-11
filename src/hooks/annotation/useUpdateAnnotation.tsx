import { useMutation, useQueryClient } from '@tanstack/react-query';
import { graphql } from '../../../graphql/client';
import { MutationUpdateAnnotationArgs } from "../../../graphql/client/graphql";
import { executeGraphql } from "@/utilities/graphql/executeGraphql";

const updateAnnotationMutation = graphql(/* GraphQL */ `
  mutation updateAnnotation($input: AnnotationInput) {
    updateAnnotation(input: $input) {
      id
    }
  }
`);

export const useUpdateAnnotation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: MutationUpdateAnnotationArgs) =>
      executeGraphql(updateAnnotationMutation, variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['annotations'] });
    },
  });
};
