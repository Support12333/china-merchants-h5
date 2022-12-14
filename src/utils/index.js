/**
 * @method 获取指定目录下所有的文件返回一个对象
 * @param {Array} files 指定目录下所有文件的对象
 * @returns {Object[]}
 */
export const getModule = files => {
    if (!files) return
    return files.keys().reduce((modules, modulePath) => {
        // 获取名字
        const name = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/')[0]
        // 获取配置
        const value = files(modulePath)
        modules[name] = value.default || value
        return modules
    }, {})
}