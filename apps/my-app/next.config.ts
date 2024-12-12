import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['server-package'],
  webpack(config) {
    // Manually set node-loader. Seem mutually exclusive to 'serverExternalPackges'
    // config.module.rules.push({
		//   test: /\.server-package.linux-x64-gnu.node$/,
		// 	loader: 'node-loader'
		// });

    config.resolve.symlinks = false;
		return config;
	}
};

export default nextConfig;
