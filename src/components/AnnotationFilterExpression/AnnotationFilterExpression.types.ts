import { GetAnnotationsQueryVariables } from '../../../graphql/client/graphql';

export interface AnnotationFilterExpressionProps {
  queryVariables: GetAnnotationsQueryVariables;
  onQueryVariablesChange?: (queryVariables: GetAnnotationsQueryVariables) => void;
}
