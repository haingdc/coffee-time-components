const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { exec } = require('child_process');

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
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/accordion/components/accordion.css', // Đường dẫn tới file mà bạn muốn sao chép
          to: 'accordion/tailwind/components/accordion.css', // Đường dẫn nơi bạn muốn file được sao chép
        },
      ],
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tapAsync('AfterEmitPlugin', (compilation, callback) => {
          // Chèn mã vào file CSS
          const cssToPrepend = '@tailwind base;\n' +
            '@tailwind components;\n' +
            '@tailwind utilities;\n';
          const filePath = path.resolve(__dirname, 'dist', 'accordion', 'tailwind', 'components', 'accordion.css');

          // Đọc và ghi lại file với đoạn mã mới
          exec(`echo "${cssToPrepend}" | cat - ${filePath} > temp && mv temp ${filePath}`, (err) => {
            if (err) {
              console.error(`Error writing to CSS file: ${err}`);
            }
            callback();
          });
        });
      },
    },
  ]
};