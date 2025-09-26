import { CardViewProps } from '@/components/Cards/CardView/CardView.types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils'

export const CardView = ({
  title,
  description,
  iconArea = <i className="fa-regular fa-folder-open text-lg" />,
  actionArea,
  children,
  className,
  ...cardProps
}: CardViewProps) => {
  return (
    <Card className={cn("flex cursor-pointer flex-col", className)} {...cardProps}>
      <CardHeader className="gap-2 flex-row justify-between items-center">
        {!!iconArea && <div className="flex h-4 w-4 justify-center">{iconArea}</div>}
        {!!title && (
          <div className="flex flex-1 items-center">
            <CardTitle>{title}</CardTitle>
          </div>
        )}
        {!!actionArea && <div className="ml-auto flex items-center gap-2">{actionArea}</div>}
      </CardHeader>

      {!!description && (
        <div className="px-4 pb-2">
          <CardDescription>{description}</CardDescription>
        </div>
      )}

      {!!children && (
        <div className="flex flex-1 w-full justify-center">
          <ScrollArea type="hover" className="flex-1 w-full max-h-[70vh]">
            <CardContent className="py-4">{children}</CardContent>
          </ScrollArea>
        </div>
      )}
    </Card>
  );
};
