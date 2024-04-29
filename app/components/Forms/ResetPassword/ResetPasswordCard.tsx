import { PomoCard } from "../../Card";
import { ResetForm } from "./ResetPasswordForm";

export function ResetPasswordCard() {
	return (
		<PomoCard title={"Reset Password"} description={""} headerClass="pb-3">
			<ResetForm />
		</PomoCard>
	);
}
