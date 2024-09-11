import { ActionIcon, Box, Divider, Group, Stack } from "@mantine/core";
import { AnnotationMap } from "@/components/AnnotationMap";
import { Annotation, AnnotationInput, GetAnnotationsQueryVariables } from "../../../graphql/client/graphql";
import { MapLayerMouseEvent, Popup, useMap } from "react-map-gl";
import { useState, MouseEvent as ReactMouseEvent, useEffect } from "react";
import { useGetAnnotations } from "@/hooks/annotation/useGetAnnotations";
import { useCreateAnnotation } from "@/hooks/annotation/useCreateAnnotation";
import { useUpdateAnnotation } from "@/hooks/annotation/useUpdateAnnotation";
import { useDeleteAnnotation } from "@/hooks/annotation/useDeleteAnnotation";
import { AnnotationMarker } from "@/components/AnnotationMarker";
import { AnnotationEditor } from "@/components/AnnotationEditor";
import { AnnotationPreviewMarker } from "@/components/AnnotationPreviewMarker";
import { AnnotationCreator } from "@/components/AnnotationCreator";
import { AnnotationList } from "@/components/AnnotationList";
import { AnnotationFilterExpression } from "@/components/AnnotationFilterExpression";
import { AnnotationItem } from "@/components/AnnotationItem";
import { IconX } from "@tabler/icons-react";

const defaultSymbol = '👍';
const mapId = 'annotationMap';
const annotationBatchSize = 100;
const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? "";

export const MojiMap = () => {
    // map
    const {annotationMap} = useMap();

    // symbol
    const [symbol, setSymbol] = useState<string>(defaultSymbol);

    // get annotations query params
    const [getAnnotationsVariables, setGetAnnotationsVariables] =
        useState<GetAnnotationsQueryVariables>({
            input: {
                filter: undefined,
                take: annotationBatchSize,
                skip: 0,
            },
        });

    // get annotations query
    const {
        data: annotationsData,
        isFetching,
        fetchNextPage,
    } = useGetAnnotations({variables: getAnnotationsVariables});

    // annotation data
    const [annotations, setAnnotations] = useState<Annotation[]>([]);

    useEffect(() => {
        // if not fetching
        if (isFetching) return;

        // if there are pages
        const pages = annotationsData?.pages;
        if (!pages || pages.length === 0) return;

        // get annotations
        const nextAnnotations = pages
            ? pages.flatMap((page) => page.getAnnotations?.annotations ?? [])?.filter((x) => !!x)
            : [];

        // update new annotations
        setAnnotations(nextAnnotations);

        // fetch next page
        const lastPage = pages[pages.length - 1];
        const count = lastPage.getAnnotations?.count ?? 0;
        if (count <= nextAnnotations.length) return;
        fetchNextPage();
    }, [annotationsData, isFetching, fetchNextPage]);

    // create an annotation
    const [createAnnotation, setCreateAnnotation] = useState<AnnotationInput | null>(null);
    const createAnnotationMutation = useCreateAnnotation();

    // update an annotation
    const [updateAnnotation, setUpdateAnnotation] = useState<Annotation | null>(null);
    const updateAnnotationMutation = useUpdateAnnotation();

    // delete an annotation
    const deleteAnnotationMutation = useDeleteAnnotation();

    const handleOnQueryVariablesChange = (queryVariables: GetAnnotationsQueryVariables) => {
        setGetAnnotationsVariables(queryVariables);
    };

    // annotation item handlers
    const handleAnnotationItemClick = (annotation: Annotation) => {
        if (!annotation) return;
        annotationMap?.flyTo({center: [annotation.longitude, annotation.latitude]});
    };

    const handleAnnotationItemDeleteClick = (annotation: Annotation, event: ReactMouseEvent) => {
        deleteAnnotationMutation.mutate({
            id: annotation.id,
        });
        event.stopPropagation();
    };

    // annotation map handlers
    const handleAnnotationMapClick = (e: MapLayerMouseEvent) => {
        const createAnnotationInput = {
            latitude: e.lngLat.lat,
            longitude: e.lngLat.lng,
            symbol: symbol,
            note: '',
        };

        const isControlKeyPressed = !!e.originalEvent?.metaKey || !!e.originalEvent?.ctrlKey;
        if (isControlKeyPressed) {
            // shortcut for quick create
            handleCreateAnnotation(createAnnotationInput);
        } else {
            // show create dialog
            setCreateAnnotation(createAnnotationInput);
        }
    };

    const handleAnnotationMarkerClick = (annotation: Annotation) => {
        setUpdateAnnotation(annotation);
    };

    const handleCreateAnnotation = (annotationInput: AnnotationInput) => {
        // remember the last symbol used
        const symbol = annotationInput.symbol ?? defaultSymbol;
        setSymbol(symbol);

        // create annotation
        createAnnotationMutation.mutate({
            input: annotationInput,
        });

        // reset
        setCreateAnnotation(null);
    };

    const handleCancelCreateAnnotation = (_annotationInput: AnnotationInput) => {
        setCreateAnnotation(null);
    };

    const handleEditAnnotation = (annotation: Annotation) => {
        // remember the last symbol used
        const symbol = annotation.symbol ?? defaultSymbol;
        setSymbol(symbol);

        // update annotation
        updateAnnotationMutation.mutate({
            input: annotation,
        });

        // reset
        setUpdateAnnotation(null);
    };

    const handleCancelEditAnnotation = (_annotation: Annotation) => {
        setUpdateAnnotation(null);
    };

    const renderAnnotationItem = (annotation: Annotation) => {
        return (
            <AnnotationItem
                key={annotation.id}
                annotation={annotation}
                onAnnotationItemClick={handleAnnotationItemClick}
                actionArea={
                    <ActionIcon
                        variant="transparent"
                        size="sm"
                        onClick={(e) => handleAnnotationItemDeleteClick(annotation, e)}
                    >
                        <IconX/>
                    </ActionIcon>
                }
            />
        );
    };

    return (
        <Group align={'flex-start'} style={{background: 'white', color: 'black'}}>
            <Stack justify={'flex-start'} w={300}>
                <Stack p={'sm'}>
                    <AnnotationFilterExpression
                        queryVariables={getAnnotationsVariables}
                        onQueryVariablesChange={handleOnQueryVariablesChange}
                    />
                    <Divider/>
                </Stack>
                <AnnotationList annotations={annotations} renderAnnotationItem={renderAnnotationItem}/>
            </Stack>
            <Box style={{flex: 1, width: '100vw', height: 'calc(100vh - 115px)'}}>
                <AnnotationMap
                    mapId={mapId}
                    mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
                    onMapClick={handleAnnotationMapClick}
                >
                    <>
                        {annotations.map((annotation) => (
                            <AnnotationMarker
                                key={annotation.id}
                                annotation={annotation}
                                onAnnotationMarkerClick={handleAnnotationMarkerClick}
                            />
                        ))}
                        {!!updateAnnotation && (
                            <>
                                <Popup
                                    key={updateAnnotation.id}
                                    latitude={updateAnnotation.latitude}
                                    longitude={updateAnnotation.longitude}
                                    anchor="bottom"
                                    offset={10}
                                    onClose={() => setUpdateAnnotation(null)}
                                >
                                    <AnnotationEditor
                                        annotation={updateAnnotation}
                                        onEditAnnotation={handleEditAnnotation}
                                        onEditAnnotationPreview={(nextAnnotation) => {
                                            setUpdateAnnotation(nextAnnotation);
                                        }}
                                        onCancelEditAnnotation={handleCancelEditAnnotation}
                                    />
                                </Popup>
                                <AnnotationPreviewMarker annotationInput={updateAnnotation}/>
                            </>
                        )}
                        {!!createAnnotation && (
                            <>
                                <Popup
                                    key={createAnnotation.latitude + createAnnotation.longitude}
                                    latitude={createAnnotation.latitude}
                                    longitude={createAnnotation.longitude}
                                    anchor="bottom"
                                    offset={10}
                                    onClose={() => setCreateAnnotation(null)}
                                >
                                    <AnnotationCreator
                                        annotationInput={createAnnotation}
                                        onCreateAnnotation={handleCreateAnnotation}
                                        onCancelCreateAnnotation={handleCancelCreateAnnotation}
                                        onCreateAnnotationPreview={(nextAnnotationInput) => {
                                            setCreateAnnotation(nextAnnotationInput);
                                        }}
                                    />
                                </Popup>
                                <AnnotationPreviewMarker annotationInput={createAnnotation}/>
                            </>
                        )}
                    </>
                </AnnotationMap>
            </Box>
        </Group>

    )
}