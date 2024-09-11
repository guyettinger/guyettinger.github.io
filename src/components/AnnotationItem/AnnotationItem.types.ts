import { ReactNode } from 'react';
import { Annotation } from '../../../graphql/client/graphql';

export interface AnnotationItemProps {
  annotation: Annotation;
  onAnnotationItemClick?: (annotation: Annotation) => void;
  actionArea?: ReactNode;
}
