const path = require('path');

/**
 * @type {import("webpack/types").Configuration}
 */
module.exports = {
  entry: {
    index: './src/index.ts',
    'accordion/components/compose/Accordion': './src/accordion/components/compose/Accordion.tsx',
    'accordion/components/Details': './src/accordion/components/Details.tsx',
    'accordion/components/Summary': './src/accordion/components/Summary.tsx',
    'accordion/components/Content': './src/accordion/components/Content.tsx',
    'accordion/components/ContentLink': './src/accordion/components/ContentLink.tsx',
  },
  mode: 'production', // Chế độ phát triển
  output: {
    filename: '[name].js', // Tên tệp đầu ra
    path: path.resolve(__dirname, 'dist'), // Đường dẫn đến thư mục đầu ra
    library: {
      type: 'module',
    },
    clean: true,
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Kiểm tra tệp CSS
        use: ['style-loader', 'css-loader'], // Sử dụng loader để xử lý
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  optimization: {
    minimize: false,
    moduleIds: "named",
    chunkIds: "named",
    splitChunks: false,
  },
  externals: {
    react: 'react',
  },
};