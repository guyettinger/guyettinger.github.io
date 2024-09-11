import { Annotation } from '../../../graphql/client/graphql';

export interface AnnotationEditorProps {
  annotation: Annotation;
  onEditAnnotation?: (annotation: Annotation) => void;
  onEditAnnotationPreview?: (annotation: Annotation) => void;
  onCancelEditAnnotation?: (annotation: Annotation) => void;
}
