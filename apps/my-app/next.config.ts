import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['server-package'],
  // webpack(config) {
    // Manually set node-loader. Seem mutually exclusive to 'serverExternalPackges'
  //   config.module.rules.push({
		//   test: /\.node$/,
		// 	loader: '@node-rs/helper'
		// });

  //   config.resolve.symlinks = true;
	// 	return config;
	// }
};

export default nextConfig;
