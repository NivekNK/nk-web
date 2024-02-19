import { ILink, columns } from "~/components/table/link-columns";
import { DataTable } from "~/components/data-table";
import { Button } from "~/components/ui/button";
import { useAuth } from "@clerk/remix";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "~/components/ui/form";

const FormSchema = z.object({
    link: z.string(),
    publicLink: z.boolean().default(false).optional(),
    addToWatchList: z.boolean().default(true).optional(),
})

interface ILinkProps {
    data: ILink[];
}

export function Links({ data }: ILinkProps) {
    const { isLoaded, userId } = useAuth();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            link: "",
            publicLink: false,
            addToWatchList: true,
        },
    })

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        console.log(data);
    }

    return (
        <DataTable
            columns={columns}
            data={data}
            pageSize={5}
            filtered={{
                column: "link",
                placeholder: "Search links...",
            }}
        >
            {isLoaded && userId && (
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="ml-3">Add Link</Button>
                    </DialogTrigger>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" >
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Link</DialogTitle>
                                    <DialogDescription>
                                        Add link to the list.
                                    </DialogDescription>
                                </DialogHeader>
                                <FormField
                                    control={form.control}
                                    name="link"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Link</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://example.com" {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                Link to be added to the list.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="publicLink"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Public Link
                                                </FormLabel>
                                                <FormDescription>
                                                    You can make a link plubic so everyone can see it.
                                                </FormDescription>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="addToWatchList"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Add to Watch List
                                                </FormLabel>
                                                <FormDescription>
                                                    You can automatically add this link to your watch list.
                                                </FormDescription>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <DialogFooter>
                                    <Button variant="outline" type="submit">
                                        Save
                                    </Button>
                                    <DialogClose asChild>
                                        <Button variant="destructive">Cancel</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </form>
                    </Form>
                </Dialog>
            )}
        </DataTable>
    );
}

