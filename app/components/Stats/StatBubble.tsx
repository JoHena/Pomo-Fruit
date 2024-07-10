export function StatBubble({ label, value }: { label: string; value: number }) {
	return (
		<div className="w-fit flex-col rounded-lg bg-PomoInActive p-4 text-sm font-medium text-white">
			<div className="text-end text-3xl">{value}</div>
			{label}
		</div>
	);
}
