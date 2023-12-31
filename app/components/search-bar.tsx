import { RotateCw } from "lucide-react";
import { useState, useEffect } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "~/components/ui/command";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "~/components/ui/popover";

const SECONDS_FOR_POPOVER_OPEN = 2;
const SECONDS_TO_CHECK_SEARCH = 1;

interface ISearchBarProps {
    onValueChange?: (value: string) => void;
}

interface ISearchData {
    id: number;
    name: string;
}

export function SearchBar(props: ISearchBarProps) {
    const [onInput, setOnInput] = useState(false);
    const [open, setOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [value, setValue] = useState("");
    const [search, setSearch] = useState<ISearchData[]>([]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!onInput) {
            timer = setTimeout(() => {
                if (!showContent) {
                    setOpen(false);
                }
            }, SECONDS_FOR_POPOVER_OPEN * 1000);
        }
        return () => clearTimeout(timer);
    }, [onInput, showContent]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (value !== "") {
            timer = setTimeout(() => {
                console.log(`searching ${value}`);
            }, SECONDS_TO_CHECK_SEARCH * 1000);
        }
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className="min-w-96">
            <Command>
                <CommandInput
                    onBlur={() => {
                        setShowContent(false);
                        setOpen(false);
                    }}
                    onFocus={() => {
                        setShowContent(true);
                    }}
                    onPointerEnter={() => {
                        setOnInput(true);
                        setOpen(true);
                    }}
                    onPointerLeave={() => {
                        setOnInput(false);
                    }}
                    onValueChange={(newValue) => {
                        setValue(newValue);

                        if (props.onValueChange) props.onValueChange(newValue);

                        if (newValue === "") {
                            setShowContent(false);
                        } else {
                            setShowContent(true);
                        }
                    }}
                    value={value}
                    placeholder="Search..."
                />
                <Popover open={open}>
                    <PopoverTrigger></PopoverTrigger>
                    <PopoverContent
                        className="min-w-96 mx-auto"
                        hidden={!showContent}
                    >
                        <CommandList>
                            <CommandEmpty>
                                {(value !== "" && (
                                    <div className="flex items-center align-middle justify-center">
                                        <RotateCw className="animate-spin" />
                                    </div>
                                )) ||
                                    "Results not found."}
                            </CommandEmpty>
                            <CommandGroup>
                                {search.map((value) => (
                                    <CommandItem key={value.id}>{value.name}</CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </PopoverContent>
                </Popover>
            </Command>
        </div>
    );
}

