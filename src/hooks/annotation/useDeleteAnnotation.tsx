import { useMutation, useQueryClient } from '@tanstack/react-query';
import { graphql } from '../../../graphql/client';
import { MutationDeleteAnnotationArgs } from "../../../graphql/client/graphql";
import { executeGraphql } from "@/utilities/graphql/executeGraphql";

const deleteAnnotationMutation = graphql(/* GraphQL */ `
  mutation deleteAnnotation($id: Int!) {
    deleteAnnotation(id: $id) {
      id
    }
  }
`);

export const useDeleteAnnotation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: MutationDeleteAnnotationArgs) => executeGraphql(deleteAnnotationMutation, variables),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['annotations'] });
    },
  });
};
