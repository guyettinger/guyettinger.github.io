import { Group, Stack, Text } from "@mantine/core";
import { CardViewProps } from "@/components/Cards/CardView/CardView.types";

export const CardView = ({
                             title,
                             description,
                             iconArea = <Text className="fa-regular fa-folder-open" size={'20px'}/>,
                             actionArea,
                             children,
                             ...stackProps
                         }: CardViewProps) => {
    return (
        <Stack p={20}
               gap={8}
               bg={'rgba(0, 0, 0, 0.4)'}
               style={{borderRadius: '10px'}}
               {...stackProps}>
            <Group grow justify="space-between">
                {!!iconArea && (
                    iconArea
                )}
                {!!actionArea && (
                    <Group maw={64}>
                        {actionArea}
                    </Group>
                )}
            </Group>
            {!!title && (
                <Text size={'lg'} fw={'bold'}>{title}</Text>
            )}
            {!!description && (
                <Text size={'sm'}>{description}</Text>
            )}
            {!!children && (
                children
            )}
        </Stack>
    )
}