const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure "pageExtensions" to include MDX files
	pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"]
};

module.exports = withMDX(nextConfig);
