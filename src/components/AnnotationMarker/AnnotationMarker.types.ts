import { Annotation } from '../../../graphql/client/graphql';

export interface AnnotationMarkerProps {
  annotation: Annotation;
  onAnnotationMarkerClick?: (annotation:Annotation) => void;
}