const path = require("path");
module.exports = {
    mode: "development",
    // entry: "./src/index.ts",
    // entry: "./src/Iterator/index.ts",   // 컴파일 실행 시작점을 "./src/Iterator/index.ts"로 설정 
    entry: "./src/Strategy/index.ts",      // 컴파일 실행 시작점을 "./src/Strategy/index.ts"로 설정 
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        // webpack은 여러 개의 소스 파일을 단 하나의 소스 파일로 묶어주는 기능 수행 
        // 이렇게 만들어진 단 하나의 파일 이름을 "bundle.js"로 지정 
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
}