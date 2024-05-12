import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/starBackground/StarBackground";
import Navbar from "@/components/navbar/Navbar";
//
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Space Portfolio",
	description: "portfolio by MojtabaWeb3",
	icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/Space Portfolio Assets/Solidity_logo.svg',
        href: '/Space Portfolio Assets/Solidity_logo.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/Space Portfolio Assets/eth.png',
        href: '/Space Portfolio Assets/eth.png',
      },
    ],
  },
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-[#030014] 
			overflow-x-hidden overflow-y-scroll`}
			>
				<StarsCanvas />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
