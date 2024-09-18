import { Card, CardSection, Group, Text, ScrollAreaAutosize } from "@mantine/core";
import { CardViewProps } from "@/components/Cards/CardView/CardView.types";

export const CardView = ({
                             title,
                             description,
                             iconArea = <Text className="fa-regular fa-folder-open" size={'20px'}/>,
                             actionArea,
                             children,
                             ...cardProps
                         }: CardViewProps) => {
    return (
        <Card withBorder shadow={"sm"} radius="md" {...cardProps}>
            <CardSection withBorder inheritPadding py="xs">
                <Group grow justify="space-between" wrap={'nowrap'} gap={8}>
                    {!!iconArea && (
                        <Group maw={24} justify={'center'} align={'center'}>
                            {iconArea}
                        </Group>
                    )}
                    {!!title && (
                        <Group flex={1} grow>
                            <Text size={'md'} fw={'500'}>{title}</Text>
                        </Group>
                    )}
                    {!!actionArea && (
                        <Group maw={64}>
                            {actionArea}
                        </Group>
                    )}
                </Group>
            </CardSection>
            {!!description && (
                <CardSection inheritPadding my="sm">
                    <Text size={'sm'}>{description}</Text>
                </CardSection>
            )}

            {!!children && (
                <ScrollAreaAutosize scrollbars={'y'} scrollbarSize={4} offsetScrollbars={true}>
                    <CardSection inheritPadding my="sm">
                        {children}
                    </CardSection>
                </ScrollAreaAutosize>
            )}
        </Card>
    )
}