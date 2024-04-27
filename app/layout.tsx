import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import coderdojo from "../public/images/coderdojo.png";
import oscr from "../public/images/oscr-prewired.jpg";


const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Prewired",
	description: "Prewired is an Edinburgh programming club for under-19s",
};


type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className={openSans.className}>
				<header>
					<nav className="w-full h-40 bg-gray-200">
						Navigation
					</nav>
				</header>
				<main>
					{ children }
				</main>
				<footer className="">
					<div className="w-full px-4 py-8 bg-purple-600">
						<div className="w-full max-w-[1000px] mx-auto flex flex-row">
							<div className="w-1/4">

							</div>
							<div className="w-1/4">
								
							</div>
							<div className="w-1/4">
								
							</div>
							<div className="w-1/4">
								<a
									href="https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC047780"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={oscr}
										alt="The OSCR registration logo with Prewired's regsitered charity number, SC047780"
										className="mb-8 max-w-[200px]"
									/>
								</a>
								<a
									href="https://coderdojo.com/en/dojos/gb/edinburgh/edinburgh-prewired-codebase"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Image
										src={coderdojo}
										alt="The Coderdojo logo"
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="p-4">
						<p className="font-bold text-center text-purple-600">
							Prewired is a Scottish charity, SC047780 | &copy; 2024 Prewired
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}

export default RootLayout;
