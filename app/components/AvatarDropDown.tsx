"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export function AvatarDropDown({
	name,
	image,
}: {
	name?: string | null;
	image?: string | null;
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="h-11 w-11 border-2 border-PomoInActive text-PomoInActive">
					{image !== null && <AvatarImage src={`${image}`} />}
					{name !== null && name !== undefined && (
						<AvatarFallback>{name[0]}</AvatarFallback>
					)}
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mt-3 min-w-28 p-0" align="end">
				<DropdownMenuItem>
					<Button
						variant={"ghost"}
						className="flex gap-3 px-3"
						onClick={() => signOut()}
					>
						<LogOutIcon className="w-4" /> Logout
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
