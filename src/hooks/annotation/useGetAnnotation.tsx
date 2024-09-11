import { useQuery } from '@tanstack/react-query';
import { graphql } from '../../../graphql/client';
import { executeGraphql } from "@/utilities/graphql/executeGraphql";

const getAnnotationQuery = graphql(/* GraphQL */ `
  query getAnnotation($id: Int!) {
    getAnnotation(id: $id) {
      id
      latitude
      longitude
      symbol
      note
    }
  }
`);

export const useGetAnnotation = (id: number) => {
  return useQuery({
    queryKey: ['annotations', id.toString()],
    queryFn: () => executeGraphql(getAnnotationQuery, { id }),
  });
};
