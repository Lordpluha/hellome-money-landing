import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<footer className="px-16 pt-14 w-full bg-footer-pattern bg-repeat-x bg-cover pb-2">
			<div className="flex justify-between flex-row">
				<div className="w-fit max-w-64">
					<h6 className="text-2xl font-semibold">Who we are</h6>
					<ul className="flex flex-col gap-y-2 mt-6">
						<li className="p-2"><Link to="about-us">About us</Link></li>
						<li className="p-2"><Link to="code-of-conduct">Code of conduct</Link></li>
						<li className="p-2"><Link to="partner-with-us">Partner with us</Link></li>
					</ul>
				</div>
				<div className="w-fit max-w-64">
					<h6 className="text-2xl font-semibold">Legal</h6>
					<ul className="flex flex-col gap-y-2 mt-6">
						<li className="p-2"><Link to="terms-&-conditions">Terms & Conditions</Link></li>
						<li className="p-2"><Link to="privacy-policy">Privacy policy</Link></li>
						<li className="p-2"><Link to="partner-with-us">Partner with us</Link></li>
					</ul>
				</div>
				<div className="w-fit max-w-64">
					<h6 className="text-2xl font-semibold">Who we are</h6>
					<ul className="flex flex-col gap-y-2 mt-6">
						<li className="p-2">United Kingdom Office: 2nd Floor, 30 Churchill Pl, London E14 5EU United Kingdom</li>
						<li className="p-2">Canada Office: 44322 YALE RD UNIT 3B #203 CHILLIWACK, BC, CANADA V2R4H1</li>
					</ul>
				</div>
			</div>
			<div className="w-full flex justify-center flex-row mt-16">
				Copyright &copy; 2024 HelloMe Money. All Rights Reserved.
			</div>
		</footer>
	)
}

export default Footer