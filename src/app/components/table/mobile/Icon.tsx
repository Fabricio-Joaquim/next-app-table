import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

export const IconMobile = ({ icon: Icon, className }: { icon: IconType, className: string }) => {

    return (
        <Icon size={20} className={
            twMerge([
                "top-1 left-1 absolute md:hidden",
                className
            ])
        } />
    )
}