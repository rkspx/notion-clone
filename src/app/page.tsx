import { User } from "@/auth/user";
import { Avatar } from "@/components/avatar";
import { addHours, formatDistance } from "date-fns";
import { ClockIcon, FileTextIcon } from "lucide-react";
import { ReactNode } from "react";

const recentlyVisited: RecentlyVisitedProps[] = [
    { icon: <FileTextIcon />, title: "Document #1", user: { name: "Riki", img: "https://avatars.githubusercontent.com/u/124599?v=4" }, timestamp: (addHours(new Date(), -1)) },
    { icon: <FileTextIcon />, title: "Document #2", user: { name: "Riki", img: "https://avatars.githubusercontent.com/u/124599?v=4" }, timestamp: (addHours(new Date(), -1)) },
    { icon: <FileTextIcon />, title: "Document #3", user: { name: "Riki", img: "https://avatars.githubusercontent.com/u/124599?v=4" }, timestamp: (addHours(new Date(), -1)) },
    { icon: <FileTextIcon />, title: "Document #4", user: { name: "Riki", img: "https://avatars.githubusercontent.com/u/124599?v=4" }, timestamp: (addHours(new Date(), -1)) },
    { icon: <FileTextIcon />, title: "Document #5", user: { name: "Riki", img: "https://avatars.githubusercontent.com/u/124599?v=4" }, timestamp: (addHours(new Date(), -1)) },
    { icon: <FileTextIcon />, title: "Document #6", user: { name: "Riki", img: "https://avatars.githubusercontent.com/u/124599?v=4" }, timestamp: (addHours(new Date(), -1)) },
    { icon: <FileTextIcon />, title: "Document #7", user: { name: "Riki", img: "https://avatars.githubusercontent.com/u/124599?v=4" }, timestamp: (addHours(new Date(), -1)) },
];

export default function Home() {
    return (
        <div className="w-[900px] margin-auto flex flex-col gap-8 py-8">
            <h1>Good Afternoon, Riki Syahputra</h1>

            <RecentlyVisited items={recentlyVisited} />
        </div>
    );
}

function RecentlyVisited({ items }: { items: RecentlyVisitedProps[]; }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center ">
                <ClockIcon size={12} />
                <h3 className="font-medium text-xs">Recently visited</h3>
            </div>

            <div className="overflow-x-auto hide-scrollbar">
                <div className="flex flex-row gap-4 items-center flex-nowrap w-max">
                    {items.map(item => <RecentlyVisitedItem key={item.title} {...item} />)}
                </div>
            </div>
        </div>
    );
}

type RecentlyVisitedProps = {
    icon: ReactNode;
    title: string;
    user: User;
    timestamp: Date;
};

function RecentlyVisitedItem({ icon, title, user, timestamp }: RecentlyVisitedProps) {
    return (
        <div className="flex flex-col gap-4 w-[144px] border rounded-md bg p-4">
            {icon}
            <h4 className="font-medium text-sm">{title}</h4>
            <div className="flex flex-row gap-2">
                <Avatar name={user.name} image={user.img} variant="small" />
                <span className="text-xs">{formatDistance(timestamp, new Date())}</span>
            </div>
        </div>
    );
}