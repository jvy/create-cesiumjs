export default function getData() {
  return {
    plugins: [
      {
        id: 'vue',
        importer: "import vue from '@vitejs/plugin-vue'",
        initializer: 'vue()'
      },
      {
        id: 'cesium',
        importer: "import cesium from 'vite-plugin-cesium'",
        initializer: 'cesium()'
      }
    ]
  }
}
