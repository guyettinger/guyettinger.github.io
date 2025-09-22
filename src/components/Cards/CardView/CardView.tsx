import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CardViewProps } from "@/components/Cards/CardView/CardView.types";

export const CardView = ({
                             title,
                             description,
                             iconArea = <i className='fa-regular fa-folder-open text-lg' />,
                             actionArea,
                             children,
                             className,
                             ...cardProps
                         }: CardViewProps) => {
    return (
        <Card className={`cursor-pointer ${className ?? ''}`} {...cardProps}>
            <CardHeader className="gap-2">
                {!!iconArea && (
                    <div className="flex h-6 w-6 items-center justify-center">
                        {iconArea}
                    </div>
                )}
                {!!title && (
                    <div className="flex flex-1 items-center">
                        <CardTitle>{title}</CardTitle>
                    </div>
                )}
                {!!actionArea && (
                    <div className="ml-auto flex items-center gap-2">
                        {actionArea}
                    </div>
                )}
            </CardHeader>

            {!!description && (
                <div className="px-4 pb-2">
                    <CardDescription>{description}</CardDescription>
                </div>
            )}

            {!!children && (
                <ScrollArea className="max-h-96">
                    <CardContent className="py-4">
                        {children}
                    </CardContent>
                </ScrollArea>
            )}
        </Card>
    )
}