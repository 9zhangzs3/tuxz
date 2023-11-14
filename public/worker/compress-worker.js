import {acompressImage} from "~/js/compress/acompress";
import {jcompressImage} from "~/js/compress/jcompress";
import {pcompressImage} from "~/js/compress/pcompress";
import {wcompressImage} from "~/js/compress/wcompress";
import {fileToBase64Async} from "~/js/util";
import {gifmin} from "~/js/gifmin.min";

self.addEventListener('message', async function(e) {
    let   compressFile;
    if(e.data.type=='mozJPEG'){
        compressFile = await jcompressImage(e.data.compressFile,e.data.encoderState,e.data.fileName,e.data.wasmArrayBuffer)
    }
    else if(e.data.type == 'oxiPNG'){
        compressFile = await pcompressImage(e.data.compressFile,e.data.encoderState,e.data.fileName,e.data.wasmArrayBuffer)
    }
    else if(e.data.type == 'webP'){
        compressFile = await wcompressImage(e.data.compressFile,e.data.encoderState,e.data.fileName,e.data.wasmArrayBuffer)
    }
    else if(e.data.type == 'avif'){
        compressFile = await acompressImage(e.data.compressFile,e.data.encoderState,e.data.fileName,e.data.wasmArrayBuffer)
    }
    else if(e.data.type == 'browserGIF'){
        compressFile = await gifImg(null,e.data.image,e.data.qratio);
    }
    let fileInfo = {}
    fileInfo.compressSize = compressFile.size
    fileInfo.size =  compressFile.size
    let base64 = await fileToBase64Async(compressFile);
    fileInfo.index = e.data.index
    fileInfo.compressName = compressFile.name;
    fileInfo.compressBase64 = base64
    // fileInfo.blob = base64ChangeBlob(base64);
    fileInfo.poolIndex = e.data.poolIndex
    self.postMessage(fileInfo)
}, false);


function base64ChangeBlob(dataurl) {
    var arr = dataurl.split(',')
    var mime = arr[0].match(/:(.*?);/)[1]
    var bstr = atob(arr[1])
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}


async function gifImg (index,file,q) {
    return  new Promise(resolve => {
        var fr = new FileReader()
        fr.readAsArrayBuffer(file)
        fr.onload = function (e) {
            var colors = Math.floor(100 * q) // 介于0~256之间数值越小压缩后文件越小
            // eslint-disable-next-line no-undef
            var result = gifmin(fr.result, colors) // 二进制文件流
            var obj = new Blob([result], { // 转换成Blob对象
                type: 'application/octet-stream'
            })
            let gifFile = new File([obj], file.name, { // 转换成file文件
                type: file.type
            })
            // let base64 = await fileToBase64Async(gifFile);
            // fileInfoList.value[index].compressSize = sizeStr(gifFile.size)
            // fileInfoList.value[index].compressName = gifFile.name;
            // fileInfoList.value[index].compressBase64 = base64
            // fileInfoList.value[index].compressRatio = Math.floor(100-(gifFile.size/ fileInfoList.value[index].size*100));
            resolve(gifFile)
        }
    })
}