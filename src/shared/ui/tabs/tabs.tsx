"use client"

import {FC, HTMLAttributes, ReactElement, useState} from "react";

export type TabButton = {
    value: number;
    title: string;
}

export type Tab = ReactElement;

export interface TabsProps {
    buttons: Array<TabButton>;
}

const Tabs: FC<TabsProps> = ({buttons}) => {
    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <div>
                <div>
                    {buttons.map(button => <button key={button.value}
                                                   onClick={() => setValue(button.value)}>{button.title}</button>)}
                </div>
            </div>
            <div>
                {buttons.find(button => button.value === value)?.title || "Not Found"}
            </div>
        </div>
    )
}

export default Tabs;