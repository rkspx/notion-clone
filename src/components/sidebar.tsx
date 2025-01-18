import { cn } from '@/lib/utils';
import { ExternalLinkIcon } from 'lucide-react';
import { ReactNode } from 'react';

export type SidebarProps = {
    groups: SidebarGroupProps[];
};

export function Sidebar({ items, className }: { readonly items: SidebarProps, readonly className?: string; }) {
    return <div className={cn(className)}>
        {items.groups.map((group, index) => <SidebarItemGroup key={`${group.title}-${index}`} {...group} />)}
    </div>;
}

type SidebarGroupProps = {
    title: string;
    showTitle: boolean;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    items: SidebarItemProps[];
};

function SidebarItemGroup({ title, showTitle, items, prefixIcon, suffixIcon }: Readonly<SidebarGroupProps>) {
    return <div>
        {showTitle && <div className="text-sm font-bold text-gray-500 flex flex-row justify-between">
            <div>
                {prefixIcon}
                {title}
            </div>
            {suffixIcon}
        </div>}
        <div className="flex flex-col gap-2">
            {items.map((item) => <SidebarItem key={`${title}-${item.label}`} {...item} />)}
        </div>
    </div>;
}

type SidebarItemProps = {
    label: string;
    icon: ReactNode;
    isLink?: boolean;
    active?: boolean;
};

function SidebarItem({ label, icon, active, isLink }: Readonly<SidebarItemProps>) {
    return <div className={cn("flex items-center gap-2 p-2 rounded-md", active ? "bg-gray-100" : "hover:bg-gray-100")}>
        <div className="w-6 h-6">{icon}</div>
        <div>{label}</div>
        {isLink && <div className="ml-auto"><ExternalLinkIcon size={16} /></div>}
    </div>;
}