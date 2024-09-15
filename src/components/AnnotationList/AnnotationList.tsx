import { ScrollAreaAutosize, Stack } from '@mantine/core';
import { Annotation } from '../../../graphql/client/graphql';
import { AnnotationItem } from '../AnnotationItem';
import { AnnotationListProps } from './AnnotationList.types';

export const AnnotationList = ({
  annotations,
  renderAnnotationItem = (annotation: Annotation) => {
    return <AnnotationItem key={annotation.id} annotation={annotation} />;
  },
}: AnnotationListProps) => {
  return (
    <ScrollAreaAutosize offsetScrollbars={true} scrollbarSize={4} m={0}>
      <Stack m={5} gap={10}>
        {annotations.map((annotation) => {
          return renderAnnotationItem(annotation);
        })}
      </Stack>
    </ScrollAreaAutosize>
  );
};
