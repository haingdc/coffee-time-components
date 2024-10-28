const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs').promises;
const webpack = require('webpack');

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
    // 'list/components/UnOrderList': './src/list/components/UnOrderList.tsx',
    // 'list/components/ListItem': './src/list/components/ListItem.tsx',
  },
  mode: 'production', // Chế độ phát triển
  output: {
    filename: '[name].js', // Tên tệp đầu ra
    path: path.resolve(__dirname, 'dist'), // Đường dẫn đến thư mục đầu ra
    library: {
      type: 'module',
    },
    clean: true,
    // publicPath: '/static/images/icons/',
  },
  experiments: {
    outputModule: true,
  },
  module: {
    // rules: [
    //   {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    //   },
    //   {
    //     test: /\.css$/, // Kiểm tra tệp CSS
    //     use: [
    //       'style-loader',
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           url: true,
    //           importLoaders: 1,
    //         }
    //       }
    //     ],
    //   },
    //   {
    //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    //     issuer: /\.[jt]sx?$/,
    //     use: [
    //       'babel-loader',
    //       '@svgr/webpack',
    //       'url-loader',
    //     ],
    //   },
    //   {
    //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    //     use: [
    //       {
    //         loader: 'url-loader',
    //         options: {
    //           outputPath: 'static/images/icons',
    //           limit: 8192,
    //           name: '[name].[ext]'
    //         },
    //       }
    //     ],
    //   },
    // ],
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
      // {
      //   test: /\.css$/, // Kiểm tra tệp CSS
      //   use: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         esModule: true,
      //         import: true,
      //         importLoaders: 1,
      //       },
      //     }
      //   ], // Sử dụng loader để xử lý
      // },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'], // Sử dụng loader cho SVG
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'images'),
    }
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
          to: 'styles/tailwind/accordion.css', // Đường dẫn nơi bạn muốn file được sao chép
        },
        {
          from: 'src/shared/base.css', // Đường dẫn tới file mà bạn muốn sao chép
          to: 'styles/tailwind/base.css', // Đường dẫn nơi bạn muốn file được sao chép
        },
        {
          from: path.resolve(__dirname, 'images'), // Đường dẫn nguồn
          to: path.resolve(__dirname, 'dist/images'),   // Đường dẫn đích
        },
        {
          from: 'src/list/components/list.css',
          to: 'styles/tailwind/list.css',
        //   transform: (content) => {
        //     // Cập nhật đường dẫn trong CSS
        //     return content.toString().replace(/url\('@images\/icons\/bullet.svg'\)/g, "url('../../icons/bullet.svg')");
        //   },
        },
      ],
    }),
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tapAsync('AfterEmitPlugin', async (compilation, callback) => {
          const filesToUpdate = [
            path.resolve(__dirname, 'dist/styles/tailwind/base.css'),
            path.resolve(__dirname, 'dist/styles/tailwind/accordion.css'),
            path.resolve(__dirname, 'dist/styles/tailwind/list.css'),
          ];

          // Append '@tailwind' cho tất cả các file
          try {
            await Promise.all(filesToUpdate.map(appendTailwindToFile));
            callback(); // Gọi callback khi hoàn thành
          } catch (err) {
            callback(err)
          }
        });
      },
    },
  ]
};

async function appendTailwindToFile(filePath) {
  const cssToPrepend = '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n';

  const data = await fs.readFile(filePath, 'utf8');
  await fs.writeFile(filePath, cssToPrepend + data);
  console.log(`Successfully updated ${filePath}`);
};