import { useState } from "react";
export default () => {
    const priorityList = [
        {
            name: "Important",
            priority: 1,
            background: "has-background-primary"
        },
        {
            name: "Casual",
            priority: 2,
            background: "has-background-info"
        },
        {
            name: "Reminder",
            priority: 3,
            background: "has-background-warning"

        }
    ];

    const [SelectedPriority, setSelectedPriority] = useState(null);

    const getBackground = p => {
        return priorityList.find(priority => priority.priority === p).background;
    }
    const setBackground = p => {
        return SelectedPriority && p.priority === SelectedPriority.priority ? SelectedPriority.background : "";
    }

    return { SelectedPriority, setSelectedPriority, priorityList, setBackground, getBackground };
}   