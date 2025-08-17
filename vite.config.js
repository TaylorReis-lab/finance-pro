import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export default {
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
      memoryLimit: 4096, // Aumenta para 4GB
    }),
  ],
}
