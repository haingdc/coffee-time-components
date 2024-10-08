const path = require('path');

/**
 * @type {import("webpack/types").Configuration}
 */
module.exports = {
  entry: './src/index.ts', // Điểm vào của ứng dụng
  mode: 'production', // Chế độ phát triển
  output: {
    filename: 'index.js', // Tên tệp đầu ra
    path: path.resolve(__dirname, 'dist'), // Đường dẫn đến thư mục đầu ra
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
    react: 'react'
  },
};